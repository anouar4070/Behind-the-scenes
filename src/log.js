export function log(message, level = 0, type = 'component') {
  let styling =
    'padding: 0.15rem; background: #04406b; color: #fcfabd';

  if (type === 'other') {
    styling = 'padding: 0.15rem; background: #210957; color: #ede6b2';
  }

  // Create indentation based on the level, each level adds "- "
  const indent = '- '.repeat(level);
 // Log the message to the console with applied styling and indentation
  console.log('%c' + indent + message, styling);
}
