# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


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
## 问题1 

这个错误提示是说，Tauri无法找到你的web资源，可能是因为你忘记构建你的web应用了。你的`distDir`被设置为`"./dist"`。

首先，你需要确保你已经运行了`npm run build`命令来构建你的Vite应用。这个命令会将你的应用编译并输出到`dist`目录中。

其次，你需要确保你的`distDir`配置是正确的。`distDir`应该指向你的Vite应用的输出目录。从你的配置来看，你的`distDir`被设置为`"./dist"`，这意味着Tauri会在项目根目录下的`dist`目录中查找静态资源和编译后的代码。

如果你已经确认了以上两点，但问题仍然存在，那么可能是因为你的Tauri应用和Vite应用的目录结构有问题。你需要确保你的Tauri应用的`src-tauri`目录和你的Vite应用的`dist`目录是在同一个目录下。例如，你的目录结构应该类似于这样：

```
/my-app
|-- /dist
|-- /src-tauri
|-- /node_modules
|-- package.json
|-- vite.config.ts
```

在这个目录结构中，`dist`目录和`src-tauri`目录是在同一个目录下的，所以你可以在`tauri.conf.json`文件中将`distDir`设置为`"./dist"`。

如果你的目录结构不是这样的，那么你需要根据你的实际目录结构来修改`distDir`的配置。例如，如果你的`dist`目录位于`src-tauri`目录的上一级目录中，那么你应该将`distDir`设置为`"../dist"`。

希望这些信息能帮助你解决问题。




https://blog.harveydelaney.com/setting-up-a-mock-api-for-your-front-end-react-project/
https://miragejs.com/


当然，除了使用 Visual Studio 或 MinGW-w64，你还可以选择使用 LLVM 作为 Rust 的链接器。以下是安装步骤：  
访问 LLVM 的官方网站或者其他可信赖的下载源，下载 LLVM 的安装包。
运行安装程序，按照提示完成安装。
安装完成后，将 LLVM 的 bin 目录添加到你的系统 PATH 中。你可以通过编辑系统环境变量来完成这个操作。
重启你的计算机或者重新打开你的终端，然后运行 clang --version 来检查是否安装成功。如果能看到 clang 的版本信息，那么就说明你已经成功安装了 LLVM。
然后，你需要告诉 Rust 使用 LLVM 的链接器。你可以通过在你的项目的 .cargo 目录下创建一个名为 config 的文件来完成这个操作。在这个文件中，添加以下内容：

[target.x86_64-pc-windows-gnu]
linker = "clang"
ar = "llvm-ar"


这个配置告诉 Rust 对于 x86_64-pc-windows-gnu 目标，使用 clang 作为链接器，使用 llvm-ar 作为 ar 工具。  请注意，你需要根据你的系统架构和 LLVM 的安装情况，将上述配置中的 x86_64-pc-windows-gnu、clang 和 llvm-ar 替换为实际的值。  完成以上步骤后，你应该就可以使用 Rust 编译你的项目了。



如果你觉得安装 Visual Studio 太大，你可以尝试安装 Visual Studio Build Tools，它是 Visual Studio 的一个轻量级版本，只包含编译工具，不包含 IDE。以下是安装步骤：

1. 访问 Visual Studio 的官方下载页面，找到并下载 Visual Studio Build Tools 的安装程序。

2. 运行安装程序，按照提示完成安装。在安装过程中，确保选择了 C++ 构建工具。

3. 安装完成后，重启你的计算机或者重新打开你的终端，然后再次尝试编译你的 Rust 程序。

如果你不想安装任何 Microsoft 的产品，你还可以尝试使用 MinGW-w64 作为 Rust 的链接器。以下是安装步骤：

1. 访问 MinGW-w64 的官方网站或者其他可信赖的下载源，下载 MinGW-w64 的安装包。

2. 运行安装程序，按照提示完成安装。

3. 安装完成后，将 MinGW-w64 的 bin 目录添加到你的系统 PATH 中。你可以通过编辑系统环境变量来完成这个操作。

4. 重启你的计算机或者重新打开你的终端，然后运行 gcc --version 来检查是否安装成功。如果能看到 gcc 的版本信息，那么就说明你已经成功安装了 MinGW-w64。

然后，你需要告诉 Rust 使用 MinGW-w64 的链接器。你可以通过在你的项目的 .cargo 目录下创建一个名为 config 的文件来完成这个操作。在这个文件中，添加以下内容：

```toml
[target.x86_64-pc-windows-gnu]
linker = "x86_64-w64-mingw32-gcc"
ar = "x86_64-w64-mingw32-ar"
```

这个配置告诉 Rust 对于 x86_64-pc-windows-gnu 目标，使用 x86_64-w64-mingw32-gcc 作为链接器，使用 x86_64-w64-mingw32-ar 作为 ar 工具。请注意，你需要根据你的系统架构和 MinGW-w64 的安装情况，将上述配置中的 x86_64-pc-windows-gnu、x86_64-w64-mingw32-gcc 和 x86_64-w64-mingw32-ar 替换为实际的值。

完成以上步骤后，你应该就可以使用 Rust 编译你的项目了。
