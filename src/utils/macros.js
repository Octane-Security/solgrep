const solidityFunctionMacros = identifiers + memberAccesses

const identifiers = [
    {name: 'blockhash', nodeType: 'Identifier'},
    {name: 'gasleft', nodeType: 'Identifier'},

    // error handling methods
    { name: 'assert', nodeType: 'Identifier'},
    { name: 'require', nodeType: 'Identifier'},
    { name: 'revert', nodeType: 'Identifier'},

    // math and cryptography methods
    {name: 'addmod', nodeType: 'Identifier'},
    {name: 'mulmod', nodeType: 'Identifier'},
    {name: 'keccak256', nodeType: 'Identifier'},
    {name: 'sha256', nodeType: 'Identifier'},
    {name: 'ripemd160', nodeType: 'Identifier'},
    {name: 'ecrecover', nodeType: 'Identifier'},
    {name: 'selfdestruct', nodeType: 'Identifier'},

    // type information functions
    {name: 'type', nodeType: 'Identifier'},

    // contract related methods
    {name: 'this', nodeType: 'Identifier'},
    {name: 'super', nodeType: 'Identifier'},
    {name: 'selfdestruct', nodeType: 'Identifier'},
]

const memberAccesses = [
    // block methods
    { name: 'basefee', nodeType: 'MemberAccess'},
    { name: 'chainid', nodeType: 'MemberAccess'},
    { name: 'coinbase', nodeType: 'MemberAccess'},
    { name: 'difficulty', nodeType: 'MemberAccess'},
    { name: 'gaslimit', nodeType: 'MemberAccess'},
    { name: 'number', nodeType: 'MemberAccess'},
    { name: 'prevrandao', nodeType: 'MemberAccess'},
    { name: 'timestamp', nodeType: 'MemberAccess'},

    // msg methods
    { name: 'data', nodeType: 'MemberAccess'},
    { name: 'sender', nodeType: 'MemberAccess'},
    { name: 'sig', nodeType: 'MemberAccess'},
    { name: 'value', nodeType: 'MemberAccess'},

    // tx methods
    { name: 'gasprice', nodeType: 'MemberAccess'},
    { name: 'origin', nodeType: 'MemberAccess'},
    
    // abi methods
    { name: 'encode', nodeType: 'MemberAccess'},
    { name: 'encodePacked', nodeType: 'MemberAccess'},
    { name: 'decode', nodeType: 'MemberAccess'},
    { name: 'encodeWithSelector', nodeType: 'MemberAccess'},
    { name: 'encodeWithSignature', nodeType: 'MemberAccess'},
    { name: 'encodeCall', nodeType: 'MemberAccess'},

    // bytes and string methods
    { name: 'concat', nodeType: 'MemberAccess'},

    // members of address types
    {name: 'balance', nodeType: 'MemberAccess'},
    {name: 'code', nodeType: 'MemberAccess'},
    {name: 'codehash', nodeType: 'MemberAccess'},
    {name: 'transfer', nodeType: 'MemberAccess'},
    {name: 'send', nodeType: 'MemberAccess'},
    {name: 'call', nodeType: 'MemberAccess'},
    {name: 'delegatecall', nodeType: 'MemberAccess'},
    {name: 'staticcall', nodeType: 'MemberAccess'},

    // type information properties
    {name: 'name', nodeType: 'MemberAccess'},
    {name: 'creationCode', nodeType: 'MemberAccess'},
    {name: 'runtimeCode', nodeType: 'MemberAccess'},
    {name: 'interfaceId', nodeType: 'MemberAccess'},
    {name: 'min', nodeType: 'MemberAccess'},
    {name: 'max', nodeType: 'MemberAccess'},
]

module.exports = {
    solidityFunctionMacros,
    identifiers,
    memberAccesses
}