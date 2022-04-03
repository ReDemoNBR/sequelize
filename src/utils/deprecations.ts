import { deprecate } from 'util';

const noop = () => { /* noop */ };

export const noRawAttributes = deprecate(noop, 'Use sequelize.fn / sequelize.literal to construct attributes', 'SEQUELIZE0001');
export const noTrueLogging = deprecate(noop, 'The logging-option should be either a function or false. Default: console.log', 'SEQUELIZE0002');
export const noStringOperators = deprecate(noop, 'String based operators are deprecated. Please use Symbol based operators for better security, read more at https://sequelize.org/docs/v7/core-concepts/model-querying-basics/#deprecated-operator-aliases', 'SEQUELIZE0003');
export const noBoolOperatorAliases = deprecate(noop, 'A boolean value was passed to options.operatorsAliases. This is a no-op with v5 and should be removed.', 'SEQUELIZE0004');
export const noDoubleNestedGroup = deprecate(noop, 'Passing a double nested nested array to `group` is unsupported and will be removed in v6.', 'SEQUELIZE0005');
export const unsupportedEngine = deprecate(noop, 'This database engine version is not supported, please update your database server. More information https://github.com/sequelize/sequelize/blob/main/ENGINE.md', 'SEQUELIZE0006');
export const movedSequelizeParam = deprecate(noop, 'The "sequelize" instance has been moved from the second parameter bag to the first parameter bag in "beforeAssociate" and "afterAssociate" hooks', 'SEQUELIZE0007');
export const useHooksRemoved = deprecate(noop, 'The "useHooks" option has been renamed to "hooks"', 'SEQUELIZE0008');
