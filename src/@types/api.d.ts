declare namespace Http {
  type Response<T> = Promise<{
    code: string
    msg: string
    result?: T
  }>
}

declare namespace GetTest {
  interface params {
    a: number
  }
  interface data {
    name: string
    age: number
  }
}

declare namespace PostTest {
  interface params {
    a: number
  }
  interface data {
    val: string
  }
}
