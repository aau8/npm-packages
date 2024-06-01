# nanoid

[Документация](https://github.com/ai/nanoid/blob/HEAD/README.ru.md)
[Калькулятор для тестирования своего алфавита и коллизии id](https://alex7kom.github.io/nano-nanoid-cc)

Это генератор уникальных id, подобно UUID. nanoid использует больший алфавит, чем UUID, поэтому длина id меньше.

|          | nanoid       | UUID       |
| -------- | ------------ | ---------- |
| Алфавит  | a-zA-Z0-9\_- | a-fA-F0-9- |
| Длина id | 21           | 32         |

## Основной набор функций

`nanoid(size?: number): string` - генерирует уникальный id. В параметре `size` можно указать размер id
`customAlphabet(alphabet: string, defaultSize: number): (size?: number) => string` - создаст функцию для генерации уникального id из определенного алфавита.

При создании генератора на основании своего алфавита, разработчики пакета рекомендуют использовать их калькулятор для рассчета коллизии - https://alex7kom.github.io/nano-nanoid-cc