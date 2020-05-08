import queryString from 'query-string';

const isFeatureOn = (flag) => {
  const parsed = queryString.parse(window.location.search);
  return Boolean(parsed[flag])
}

export default isFeatureOn
