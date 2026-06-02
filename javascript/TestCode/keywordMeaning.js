function getJsBasicsKeywordMeaning(term) {
  switch (term) {
    case 'NODE':
      console.log('runtime');
      break;
    case 'npm':
      console.log('package-manager');
      break;
    case 'v8':
      console.log('engine');
      break;
    case 'not-a-topic':
      console.log('unknown');
      break;
    default:
       console.log('select correct name');
  }
}

getJsBasicsKeywordMeaning('npm');