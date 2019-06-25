interface Result {
  name: string;
}
interface Mydata {
  title: string;
  result: Result
}
class Test {
  private data;
  constructor (str: Mydata) {
    this.data = str.title;
  }
  log () {
    console.log(this.data, '-----');
  }
}

const test = new Test({
  title: 'kkk999',
  result: {
    name: 'zhang'
  }
})
test.log();