const MarX = artifacts.require("MarX");

module.exports = async function (deployer, network, addresses) {
  const mintingAllowedAfter = 1767225600;
  
  await deployer.deploy(MarX, addresses[0], addresses[0], mintingAllowedAfter);
};
