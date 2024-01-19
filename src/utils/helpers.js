const getFunctionNameFromNode = (node) => {
    switch (node.expression.type) {
      case 'MemberAccess':
        return node.expression.memberName;
      case 'Identifier':
        return node.expression.name;
      case 'TypeNameExpression':
        return node.expression.typeName;
      default:
        throw new Error(`Unsupported function call type: ${node.expression.type}`);
    }
  }

module.exports = {
    getFunctionNameFromNode
}