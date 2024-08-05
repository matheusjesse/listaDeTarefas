# Aplicação de lista de tarefas para dispositivos móveis
![Desktop - 1](https://github.com/user-attachments/assets/dcaaf79a-53a5-49ba-bfec-95dff5904845)


Projeto realizado utilizando __TypeScript__, __ReactNative__, __Styled-Components__ e __android__ __studio__ para emulação do celular.
### Instalação do projeto
#### 1° passo
##### Clonar o projeto
```
git clone git@github.com:matheusjesse/listaDeTarefas.git	
```

#### 2° passo
#### Entrar na pasta do projeto
```
cd listaDeTarefas
```

#### 3° passo
Instalando as dependências do aplicativo. (devido uma incompatibilidade que encontrei com styled-componets ou a versão do node instalada na minha maquina, para o projeto instalar as dependências necessárias  precisa adicionar a linha de Código --legacy-peer-deps)
```
npm install --legacy-peer-deps
```

#### 4° passo
Iniciando a aplicação. Cerifique que seu emulador Android está aberto.
```
npm start
```

#### 5° passo
Após npm start irá aparecer um menu para escolher a forma de iniciar o aplicativo aperta a letra "a" para iniciar a traveis do emulador Android.
```
i - run on iOS
a - run on Android
d - open Dev Menu
r - reload app
```

#### Exceção - error 
Se você estiver encontrando algum erro na inicialização do aplicativo no emulado use o comando a baixo para limpar o cache e tentar solucionar o problema.
```
npm start -- --reset-cache
```
