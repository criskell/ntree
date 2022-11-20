# ntree
ntree é um utilitário inspirado pelo comando `tree` do Linux.

## API
### `tree([dirPath][, options])`:
Cria uma representação da estrutura do diretório localizado em `dirPath` no formato do comando `tree`.

O diretório padrão é o diretório de trabalho atual (CWD).

As opções são fornecidas em `options` como um objeto:
	- `ls(path: string): Promise<string[]>` (opcional): Função que deve retornar um array de diretórios localizados em `path` (que pode ser um arquivo ou diretório).
	- `write` (opcional): Função para onde enviar os dados. Se não fornecido, irá armazenar a estrutura de diretórios na memória e resolver a Promise com este valor.