const MarX = artifacts.require("MarX");

module.exports = async function (callback) {
  const network = config.network
  
  if (network != 'evmos') {
    throw new Error('No MarX DEX contracts on this network!')
  }
  
  try {
    const routerAddress = '0x20eA71c29200B89D227086F1C866a4C59441Bdf6'
    const marxAddress = '0xD05958358Cf3F211E5419C6Df2B95d44FFE712bD'
    
    console.log("Approve MarX")
    let marxContract = await MarX.at(marxAddress)
    await marxContract.approve(routerAddress, '100000000000000000000000')
  }
  catch(error) {
    console.log(error)
  }
  
  callback(`Complete!`)
};
