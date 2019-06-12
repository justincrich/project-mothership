export default function KeyedListMapper({ list, selectId, children }) {
  const generateId = item => {
    if (selectId && typeof selectId === 'function') {
      return selectId(item);
    }
    return JSON.stringify(item);
  };
  if (list && typeof children === 'function') {
    return list.map((item, index) => children(generateId(item), item, index));
  }
  throw new Error('KeyedListMapper: No list provided');
}
