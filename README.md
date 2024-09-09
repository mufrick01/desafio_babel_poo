# Desafió Babel / POO

1. Clonar repositorio
2. instalar paquetes node
```
npm init
```
3. Transpilar con biblioteca `babel`

* el siguiente comando transforma el codigo de JavaScript ES6+ a uno de ES5
```
npx babel src/ -d dist/ --config-file ./babel.config.json
```
4. ver resultados en carpeta `dist`