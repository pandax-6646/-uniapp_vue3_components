declare namespace Http {
  type Response<T> = Promise<{
    code: string
    msg: string
    result?: T
  }>

  /** 通用分页结果类型 */
  type PageResult<T> = {
    /** 列表数据 */
    items: T[]
    /** 总条数 */
    counts: number
    /** 当前页数 */
    page: number
    /** 总页数 */
    pages: number
    /** 每页条数 */
    pageSize: number
  }
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
