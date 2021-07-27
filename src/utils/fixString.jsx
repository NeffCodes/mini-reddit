//fixes issues in a string pulled from
//.json file where the string value has
//& and < are &amp; | &lt; respectively

export const fixedString = str => {
  str = str.replace(/&amp;/g, '&');
  str = str.replace(/&lt;/g, '<');
  str = str.replace(/&gt;/g, '>');
  str = str.replace(/\\/g, '');
  str = str.replace(/&#x200B;/g, ' ');
  return str;
};
