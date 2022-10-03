# API-FMC
API Firebase Cloud Messaging

## Preparação do ambiente (mobile)

1 - No terminal dentro do diretório que criará o projeto

```
npx create-expo-app <nomeDoProjeto>
```

### Configuração do Typescript

2 - No terminal dentro do diretório do projeto utilize o comando

```
npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
```

3 - Criar no diretório raiz o arquivo tsconfig.json com as seguintes configurações:

```
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react-native",
    "lib": ["es2017"],
    "types": ["react-native", "jest"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}
```

4 - Renomear o arquivo app.js para app.tsx

5 - Criação do arquivo jest.config.js com as seguintes configurações

```
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};
```

### Utilização de alias customizado com Typescript

6 - No arquivo tsconfig.json inclua as seguintes configurações:

```
    "target": "esnext",
+     "baseUrl": ".",
+     "paths": {
+       "*": ["src/*"],
+       "tests": ["tests/*"],
+       "@components/*": ["src/components/*"],
+     },
    }
```

7 - Adicione babel-plugin-module-resolver

```
npm install --save-dev babel-plugin-module-resolver
```

8 - No arquivo bable.config.ts inclua as seguintes configurações

```
{
  plugins: [
+    [
+       'module-resolver',
+       {
+         root: ['./src'],
+         extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
+         alias: {
+           tests: ['./tests/'],
+           "@components": "./src/components",
+         }
+       }
+    ]
  ]
}
```



