import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { SolanaMeteor } from '../target/types/solana_meteor';
import { SystemProgram, Keypair } from '@solana/web3.js';
import { BN } from 'bn.js';
import assert from 'assert';

describe('solana_meteor (Milestone 1)', () => {
  const provider = anchor.AnchorProvider.local();
  anchor.setProvider(provider);
  const program = provider.workspace.SolanaMeteor as Program<SolanaMeteor>;

  let poolAccount: Keypair;

  it('activates immediately when activation_point is in the past', async () => {
    poolAccount = Keypair.generate();
    const now = Math.floor(Date.now() / 1000);

    await program.methods
      .initPool(new BN(now - 60))
      .accounts({
        pool: poolAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([poolAccount])
      .rpc();

    await program.methods
      .activate()
      .accounts({ pool: poolAccount.publicKey })
      .rpc();

    const pool = await program.account.meteorPool.fetch(poolAccount.publicKey);
    assert.equal(pool.isActive, true);
  });

  it('fails activation when activation_point is in the future', async () => {
    poolAccount = Keypair.generate();
    const now = Math.floor(Date.now() / 1000);

    await program.methods
      .initPool(new BN(now + 3600))
      .accounts({
        pool: poolAccount.publicKey,
        user: provider.wallet.publicKey,
        systemProgram: SystemProgram.programId,
      })
      .signers([poolAccount])
      .rpc();

    try {
      await program.methods
        .activate()
        .accounts({ pool: poolAccount.publicKey })
        .rpc();
      assert.fail('Expected activation to throw');
    } catch (err: any) {
      assert.ok(
        err.error.errorMessage.includes('Pool is not activated yet'),
        'Expected NotActivatedYet error'
      );
    }
  });
});
