(this.webpackJsonpwaveportal=this.webpackJsonpwaveportal||[]).push([[0],{33:function(f){f.exports=JSON.parse('{"_format":"hh-sol-artifact-1","contractName":"WavePortal","sourceName":"contracts/WavePortal.sol","abi":[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"message","type":"string"}],"name":"NewWave","type":"event"},{"inputs":[],"name":"getAllWaves","outputs":[{"components":[{"internalType":"address","name":"waver","type":"address"},{"internalType":"string","name":"message","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"internalType":"struct WavePortal.Wave[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTotalWaves","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastWavedAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_message","type":"string"}],"name":"wave","outputs":[],"stateMutability":"nonpayable","type":"function"}],"bytecode":"0x60806040526200004f6040518060400160405280601881526020017f436f6e747261637420697320636f6e73747275637465642100000000000000008152506200007760201b620006471760201c565b606444426200005f9190620001c4565b6200006b919062000261565b60018190555062000308565b62000117816040516024016200008e919062000184565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506200011a60201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b60006200015082620001a8565b6200015c8185620001b3565b93506200016e8185602086016200022b565b6200017981620002f7565b840191505092915050565b60006020820190508181036000830152620001a0818462000143565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000620001d18262000221565b9150620001de8362000221565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000216576200021562000299565b5b828201905092915050565b6000819050919050565b60005b838110156200024b5780820151818401526020810190506200022e565b838111156200025b576000848401525b50505050565b60006200026e8262000221565b91506200027b8362000221565b9250826200028e576200028d620002c8565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b6110ff80620003186000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063449d46c0146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b6004803603810190610066919061098a565b6100d9565b005b610075610493565b6040516100829190610d91565b60405180910390f35b6100a560048036038101906100a09190610961565b6104de565b6040516100b29190610d91565b60405180910390f35b6100c36104f6565b6040516100d09190610c8d565b60405180910390f35b42610708600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101279190610eae565b10610167576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015e90610d71565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546101bd9190610eae565b925050819055506102036040518060400160405280600d81526020017f2573206861732077617665642100000000000000000000000000000000000000815250336106e0565b600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906102c2929190610841565b50604082015181600201555050606460015444426102e09190610eae565b6102ea9190610eae565b6102f49190610fb4565b600181905550603260015411610440576103436040518060400160405280600681526020017f257320776f6e0000000000000000000000000000000000000000000000000000815250336106e0565b6000655af3107a4000905047811115610391576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038890610d31565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516103b790610c78565b60006040518083038185875af1925050503d80600081146103f4576040519150601f19603f3d011682016040523d82523d6000602084013e6103f9565b606091505b505090508061043d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043490610d51565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea7164283604051610488929190610dac565b60405180910390a250565b60006104d66040518060400160405280601781526020017f5765206861766520256420746f74616c2077617665732100000000000000000081525060005461077c565b600054905090565b60036020528060005260406000206000915090505481565b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561063e57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546105a390610f82565b80601f01602080910402602001604051908101604052809291908181526020018280546105cf90610f82565b801561061c5780601f106105f15761010080835404028352916020019161061c565b820191906000526020600020905b8154815290600101906020018083116105ff57829003601f168201915b505050505081526020016002820154815250508152602001906001019061051a565b50505050905090565b6106dd8160405160240161065b9190610caf565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610818565b50565b61077882826040516024016106f6929190610cd1565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610818565b5050565b6108148282604051602401610792929190610d01565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610818565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461084d90610f82565b90600052602060002090601f01602090048101928261086f57600085556108b6565b82601f1061088857805160ff19168380011785556108b6565b828001600101855582156108b6579182015b828111156108b557825182559160200191906001019061089a565b5b5090506108c391906108c7565b5090565b5b808211156108e05760008160009055506001016108c8565b5090565b60006108f76108f284610e0d565b610ddc565b90508281526020810184848401111561090f57600080fd5b61091a848285610f40565b509392505050565b600081359050610931816110b2565b92915050565b600082601f83011261094857600080fd5b81356109588482602086016108e4565b91505092915050565b60006020828403121561097357600080fd5b600061098184828501610922565b91505092915050565b60006020828403121561099c57600080fd5b600082013567ffffffffffffffff8111156109b657600080fd5b6109c284828501610937565b91505092915050565b60006109d78383610c0a565b905092915050565b6109e881610f04565b82525050565b6109f781610f04565b82525050565b6000610a0882610e4d565b610a128185610e70565b935083602082028501610a2485610e3d565b8060005b85811015610a605784840389528151610a4185826109cb565b9450610a4c83610e63565b925060208a01995050600181019050610a28565b50829750879550505050505092915050565b6000610a7d82610e58565b610a878185610e8c565b9350610a97818560208601610f4f565b610aa0816110a1565b840191505092915050565b6000610ab682610e58565b610ac08185610e9d565b9350610ad0818560208601610f4f565b610ad9816110a1565b840191505092915050565b6000610af1603483610e9d565b91507f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008301527f616e2074686520636f6e7472616374206861732e0000000000000000000000006020830152604082019050919050565b6000610b57602783610e9d565b91507f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008301527f6e74726163742e000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610bbd600883610e9d565b91507f576169742033306d0000000000000000000000000000000000000000000000006000830152602082019050919050565b6000610bfd600083610e81565b9150600082019050919050565b6000606083016000830151610c2260008601826109df565b5060208301518482036020860152610c3a8282610a72565b9150506040830151610c4f6040860182610c5a565b508091505092915050565b610c6381610f36565b82525050565b610c7281610f36565b82525050565b6000610c8382610bf0565b9150819050919050565b60006020820190508181036000830152610ca781846109fd565b905092915050565b60006020820190508181036000830152610cc98184610aab565b905092915050565b60006040820190508181036000830152610ceb8185610aab565b9050610cfa60208301846109ee565b9392505050565b60006040820190508181036000830152610d1b8185610aab565b9050610d2a6020830184610c69565b9392505050565b60006020820190508181036000830152610d4a81610ae4565b9050919050565b60006020820190508181036000830152610d6a81610b4a565b9050919050565b60006020820190508181036000830152610d8a81610bb0565b9050919050565b6000602082019050610da66000830184610c69565b92915050565b6000604082019050610dc16000830185610c69565b8181036020830152610dd38184610aab565b90509392505050565b6000604051905081810181811067ffffffffffffffff82111715610e0357610e02611072565b5b8060405250919050565b600067ffffffffffffffff821115610e2857610e27611072565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610eb982610f36565b9150610ec483610f36565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610ef957610ef8610fe5565b5b828201905092915050565b6000610f0f82610f16565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610f6d578082015181840152602081019050610f52565b83811115610f7c576000848401525b50505050565b60006002820490506001821680610f9a57607f821691505b60208210811415610fae57610fad611043565b5b50919050565b6000610fbf82610f36565b9150610fca83610f36565b925082610fda57610fd9611014565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6110bb81610f04565b81146110c657600080fd5b5056fea264697066735822122000a39f46fabe2457cbe789acf57b16c253726519e18e304a8ce9a82d158ab1ab64736f6c63430008000033","deployedBytecode":"0x608060405234801561001057600080fd5b506004361061004c5760003560e01c8063449d46c0146100515780639a2cdc081461006d578063a42a46631461008b578063bd43a908146100bb575b600080fd5b61006b6004803603810190610066919061098a565b6100d9565b005b610075610493565b6040516100829190610d91565b60405180910390f35b6100a560048036038101906100a09190610961565b6104de565b6040516100b29190610d91565b60405180910390f35b6100c36104f6565b6040516100d09190610c8d565b60405180910390f35b42610708600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546101279190610eae565b10610167576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015e90610d71565b60405180910390fd5b42600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555060016000808282546101bd9190610eae565b925050819055506102036040518060400160405280600d81526020017f2573206861732077617665642100000000000000000000000000000000000000815250336106e0565b600260405180606001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815260200142815250908060018154018082558091505060019003906000526020600020906003020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010190805190602001906102c2929190610841565b50604082015181600201555050606460015444426102e09190610eae565b6102ea9190610eae565b6102f49190610fb4565b600181905550603260015411610440576103436040518060400160405280600681526020017f257320776f6e0000000000000000000000000000000000000000000000000000815250336106e0565b6000655af3107a4000905047811115610391576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161038890610d31565b60405180910390fd5b60003373ffffffffffffffffffffffffffffffffffffffff16826040516103b790610c78565b60006040518083038185875af1925050503d80600081146103f4576040519150601f19603f3d011682016040523d82523d6000602084013e6103f9565b606091505b505090508061043d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161043490610d51565b60405180910390fd5b50505b3373ffffffffffffffffffffffffffffffffffffffff167f5f7e16dc676677766a70e9c5628aa6c54ddb8b6e5188e2ae1e1f17f1ffbea7164283604051610488929190610dac565b60405180910390a250565b60006104d66040518060400160405280601781526020017f5765206861766520256420746f74616c2077617665732100000000000000000081525060005461077c565b600054905090565b60036020528060005260406000206000915090505481565b60606002805480602002602001604051908101604052809291908181526020016000905b8282101561063e57838290600052602060002090600302016040518060600160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546105a390610f82565b80601f01602080910402602001604051908101604052809291908181526020018280546105cf90610f82565b801561061c5780601f106105f15761010080835404028352916020019161061c565b820191906000526020600020905b8154815290600101906020018083116105ff57829003601f168201915b505050505081526020016002820154815250508152602001906001019061051a565b50505050905090565b6106dd8160405160240161065b9190610caf565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610818565b50565b61077882826040516024016106f6929190610cd1565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610818565b5050565b6108148282604051602401610792929190610d01565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050610818565b5050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b82805461084d90610f82565b90600052602060002090601f01602090048101928261086f57600085556108b6565b82601f1061088857805160ff19168380011785556108b6565b828001600101855582156108b6579182015b828111156108b557825182559160200191906001019061089a565b5b5090506108c391906108c7565b5090565b5b808211156108e05760008160009055506001016108c8565b5090565b60006108f76108f284610e0d565b610ddc565b90508281526020810184848401111561090f57600080fd5b61091a848285610f40565b509392505050565b600081359050610931816110b2565b92915050565b600082601f83011261094857600080fd5b81356109588482602086016108e4565b91505092915050565b60006020828403121561097357600080fd5b600061098184828501610922565b91505092915050565b60006020828403121561099c57600080fd5b600082013567ffffffffffffffff8111156109b657600080fd5b6109c284828501610937565b91505092915050565b60006109d78383610c0a565b905092915050565b6109e881610f04565b82525050565b6109f781610f04565b82525050565b6000610a0882610e4d565b610a128185610e70565b935083602082028501610a2485610e3d565b8060005b85811015610a605784840389528151610a4185826109cb565b9450610a4c83610e63565b925060208a01995050600181019050610a28565b50829750879550505050505092915050565b6000610a7d82610e58565b610a878185610e8c565b9350610a97818560208601610f4f565b610aa0816110a1565b840191505092915050565b6000610ab682610e58565b610ac08185610e9d565b9350610ad0818560208601610f4f565b610ad9816110a1565b840191505092915050565b6000610af1603483610e9d565b91507f547279696e6720746f207769746864726177206d6f7265206d6f6e657920746860008301527f616e2074686520636f6e7472616374206861732e0000000000000000000000006020830152604082019050919050565b6000610b57602783610e9d565b91507f4661696c656420746f207769746864726177206d6f6e65792066726f6d20636f60008301527f6e74726163742e000000000000000000000000000000000000000000000000006020830152604082019050919050565b6000610bbd600883610e9d565b91507f576169742033306d0000000000000000000000000000000000000000000000006000830152602082019050919050565b6000610bfd600083610e81565b9150600082019050919050565b6000606083016000830151610c2260008601826109df565b5060208301518482036020860152610c3a8282610a72565b9150506040830151610c4f6040860182610c5a565b508091505092915050565b610c6381610f36565b82525050565b610c7281610f36565b82525050565b6000610c8382610bf0565b9150819050919050565b60006020820190508181036000830152610ca781846109fd565b905092915050565b60006020820190508181036000830152610cc98184610aab565b905092915050565b60006040820190508181036000830152610ceb8185610aab565b9050610cfa60208301846109ee565b9392505050565b60006040820190508181036000830152610d1b8185610aab565b9050610d2a6020830184610c69565b9392505050565b60006020820190508181036000830152610d4a81610ae4565b9050919050565b60006020820190508181036000830152610d6a81610b4a565b9050919050565b60006020820190508181036000830152610d8a81610bb0565b9050919050565b6000602082019050610da66000830184610c69565b92915050565b6000604082019050610dc16000830185610c69565b8181036020830152610dd38184610aab565b90509392505050565b6000604051905081810181811067ffffffffffffffff82111715610e0357610e02611072565b5b8060405250919050565b600067ffffffffffffffff821115610e2857610e27611072565b5b601f19601f8301169050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600081905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610eb982610f36565b9150610ec483610f36565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610ef957610ef8610fe5565b5b828201905092915050565b6000610f0f82610f16565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015610f6d578082015181840152602081019050610f52565b83811115610f7c576000848401525b50505050565b60006002820490506001821680610f9a57607f821691505b60208210811415610fae57610fad611043565b5b50919050565b6000610fbf82610f36565b9150610fca83610f36565b925082610fda57610fd9611014565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b6110bb81610f04565b81146110c657600080fd5b5056fea264697066735822122000a39f46fabe2457cbe789acf57b16c253726519e18e304a8ce9a82d158ab1ab64736f6c63430008000033","linkReferences":{},"deployedLinkReferences":{}}')},39:function(f,e,b){f.exports=b(58)},44:function(f,e,b){},46:function(f,e,b){},48:function(f,e){},58:function(f,e,b){"use strict";b.r(e);var a=b(6),t=b.n(a),n=b(32),c=b.n(n),d=(b(44),b(2)),r=b.n(d),s=b(18),o=b(19),i=b(25),u=(b(46),b(20)),l=b(33),p=function(){var f=Object(a.useState)(""),e=Object(i.a)(f,2),b=e[0],n=e[1],c=Object(a.useState)([]),d=Object(i.a)(c,2),p=d[0],m=d[1],v=l.abi,w=function(){var f=Object(o.a)(r.a.mark((function f(){var e,b,a,t,n,c,d;return r.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,!(b=e.ethereum)){f.next=15;break}return a=new u.a.providers.Web3Provider(b),t=a.getSigner(),n=new u.a.Contract(" 0x0f7BEc5776B31fED1619E1fb2C31D41bD1f3e541",v,t),f.next=8,n.getAllWaves();case 8:c=f.sent,d=[],c.forEach((function(f){d.push({address:f.waver,timestamp:new Date(1e3*f.timestamp),message:f.message})})),m(d),n.on("NewWave",(function(f,e,b){console.log("NewWave",f,e,b),m((function(a){return[].concat(Object(s.a)(a),[{address:f,timestamp:new Date(1e3*e),message:b}])}))})),f.next=16;break;case 15:console.log("Ethereum object doesn't exist!");case 16:f.next=21;break;case 18:f.prev=18,f.t0=f.catch(0),console.log(f.t0);case 21:case"end":return f.stop()}}),f,null,[[0,18]])})));return function(){return f.apply(this,arguments)}}(),h=function(){var f=Object(o.a)(r.a.mark((function f(){var e,b,a,t;return r.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=7;break}return console.log("Make sure you have metamask!"),f.abrupt("return");case 7:console.log("We have the ethereum object",b);case 8:return f.next=10,b.request({method:"eth_accounts"});case 10:0!==(a=f.sent).length?(t=a[0],console.log("Found an authorized account:",t),n(t),w()):console.log("No authorized account found"),f.next=17;break;case 14:f.prev=14,f.t0=f.catch(0),console.log(f.t0);case 17:case"end":return f.stop()}}),f,null,[[0,14]])})));return function(){return f.apply(this,arguments)}}(),y=function(){var f=Object(o.a)(r.a.mark((function f(){var e,b,a;return r.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,b=e.ethereum){f.next=5;break}return alert("Get MetaMask!"),f.abrupt("return");case 5:return f.next=7,b.request({method:"eth_requestAccounts"});case 7:a=f.sent,console.log("Connected",a[0]),n(a[0]),f.next=15;break;case 12:f.prev=12,f.t0=f.catch(0),console.log(f.t0);case 15:case"end":return f.stop()}}),f,null,[[0,12]])})));return function(){return f.apply(this,arguments)}}(),g=function(){var f=Object(o.a)(r.a.mark((function f(){var e,b,a,t,n,c,d;return r.a.wrap((function(f){for(;;)switch(f.prev=f.next){case 0:if(f.prev=0,e=window,!(b=e.ethereum)){f.next=23;break}return a=new u.a.providers.Web3Provider(b),t=a.getSigner(),n=new u.a.Contract(" 0x0f7BEc5776B31fED1619E1fb2C31D41bD1f3e541",v,t),f.next=8,n.getTotalWaves();case 8:return c=f.sent,console.log("Retrieved total wave count...",c.toNumber()),f.next=12,n.wave("",{gasLimit:3e5});case 12:return d=f.sent,console.log("Mining...",d.hash),f.next=16,d.wait();case 16:return console.log("Mined -- ",d.hash),f.next=19,n.getTotalWaves();case 19:c=f.sent,console.log("Retrieved total wave count...",c.toNumber()),f.next=24;break;case 23:console.log("Ethereum object doesn't exist!");case 24:f.next=29;break;case 26:f.prev=26,f.t0=f.catch(0),console.log(f.t0);case 29:case"end":return f.stop()}}),f,null,[[0,26]])})));return function(){return f.apply(this,arguments)}}();return Object(a.useEffect)((function(){h()}),[]),t.a.createElement("div",{className:"mainContainer"},t.a.createElement("div",{className:"dataContainer"},t.a.createElement("div",{className:"header"},"Hi Peeps!"),t.a.createElement("div",{className:"bio"},"I am Moldyr and I am super excited to get onboard the Blockchain spaceship\ud83d\ude80 ",t.a.createElement("br",null)," Connect your Ethereum wallet and wave at me!"),t.a.createElement("input",{type:"text",id:"waveText",className:"waveText",placeholder:"Send me a link to something interesting about Solidity:)"}),t.a.createElement("button",{className:"waveButton",onClick:g},"wave at me \ud83d\udc4b"),!b&&t.a.createElement("button",{className:"waveButton",onClick:y},"Connect Wallet"),p.length>0&&t.a.createElement("div",{className:"wavers"},t.a.createElement("h1",null,"Look who else waved \ud83d\ude4c"),p.map((function(f,e){return t.a.createElement("div",{className:"waversList"},t.a.createElement("em",null,f.address),t.a.createElement("br",null),t.a.createElement("p",null,f.message)," waved on"," ",t.a.createElement("em",null,f.timestamp.toDateString()))})))))};c.a.render(t.a.createElement(p,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.15f67112.chunk.js.map