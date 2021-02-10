export const heavyProccess = (interactions) => {
  for (let i = 0; i < interactions; i++) {
    console.log('Here we go');
  }
  return `${interactions} interections done!`
}