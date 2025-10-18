import { ethers } from 'hardhat';

async function main() {
  const Fortune = await ethers.getContractFactory('FortuneCharm');
  const fortune = await Fortune.deploy();
  await fortune.deployed();
  console.log('FortuneCharm deployed to:', fortune.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
