module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 'subject-case': [0, 'never'],
    'type-enum': [
      2, // 代表必须输入
      'always',
      [
        'feat', // 新增功能
        'fix', // 修复缺陷
        'docs', // 文档、注释变更
        'style', // 代码格式（不影响功能，例如空格、分号等格式修正）
        'refactor', // 代码重构（不包括 bug 修复、功能新增））
        'perf', // 性能优化
        'test', // 添加疏漏测试或已有测试改动
        'build', // 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
        'ci', // 修改项目继续集成流程（Travis，Jenkins，GitLab CI，Circle等）
        'chore', // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
        'revert', // 代码回退

        // 自定义新增
        'merge', // 仅进行分支合并
        'wip', // 开发中
        'refine' // 小优化，没有到 refactor 的程度
      ]
    ]
  }
}
