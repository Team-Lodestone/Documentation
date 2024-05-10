# BJSON
### Prerequisites:
```
El archivo está en little endian. Se separa de 4 en 4-Bytes.
** The file/archive is in little endian, and is separated by 4-Bytes per-region.
Un conjunto de 4 bytes antes del inicio de la región de textos indica la longitud de caracteres de la región.
** 4-bytes before the number starts holds data, such as the length of the text.
** Among other things such as defining how the data is structured in the region.
```
### Values:
```
Identificadores (Structure Identification):
    1 - Booleano         (Boolean)
    2 - Entero           (32-Bit Integer)
    3 - Flotante         (32-Bit Floating Point Integer)
    4 - Lista            (JSON List)
    5 - Cadena de texto  (Checksum/Placeholder for Text)
    6 - Objeto           (JSON Object)
```
### Data Structure:
```
Ejemplo (Example):
    Entero (32-Bit Integer):
        Bytearray - 02 00 00 00   -   3A 00 00 00
                    ^ Declaration     ^ Value

        Arreglo-Completo (Full Array):
            02 00 00 00 3A 00 00 00

  Objeto (JSON Object):
        Bytearray - 06 00 00 00       -       03 00 00 00       -       01 00 00 00       -       01 00 00 00
                    ^ Declaration             ^ Number of Object Items  ^ Boolean                 ^ Value: True

        Arreglo-Completo (Full Array):
            06 00 00 00 03 00 00 00 01 00 00 00 01 00 00 00 00 00 00 00
```
### Specs/Specifications:
```
Información específica (Information/Specsheet)
    Estructuras (Data Structures):
        1 - Booleano (Boolean/Bool):
            Identificador                           - 01 00 00 00
            Valor                                   - (01 00 00 00) ó (00 00 00 00) True or False respectivamente (Respectively)
            Espacio vacío                           - 4 bytes nulos (4-Byte NULL Padding)

        2 - Entero (32-Bit Int):
            Identificador                           - 02 00 00 00
            Valor                                   - 4 bytes signed integrer little endian
            Espacio vacío                           - 4 bytes nulos (4-Byte NULL Padding)

        3 - Flotante (32-Bit Floating Point Int):
            Identificador                           - 03 00 00 00
            Valor                                   - 4 bytes número en formato de 32 bits de punto flotante little endian
            Espacio vacío                           - 4 bytes nulos (4-Byte NULL Padding)

        4 - Lista (JSON List):
            Identificador                           - 04 00 00 00
            Longitud en objetos                     - 4 bytes unsigned integrer little endian
            Longitud final                          - 4 bytes que representan la suma de todos los elementos 
                                                        internos de aquellos elementos que se hayan cerrado 
                                                        antes que este y que sean del mismo tipo.
```
### Specs/Specifications (Extended):
```
        5 - Cadena de texto (Text):
            Identificador                           - 05 00 00 00
            Hash JOAAT (kind of)                    - 4 bytes little endian
            Posición del texto en región de textos  - 4 bytes unsigned integrer little endian

        6 - Objeto (JSON Object):
            Identificador                           - 06 00 00 00
            Longitud en objetos                     - 4 bytes unsigned integrer little endian
            Longitud final                          - 4 bytes que representan la suma de todos los elementos 
                                                        internos de aquellos elementos que se hayan cerrado 
                                                        antes que este y que sean del mismo tipo.
```
### Regions:
```
    Regiones:
        - Estructura
            En esta región se encuentran almacenados todos los elementos que existen en el archivo con su tipo
            y estructura respectivamente, así como datos simples, sin incluir los textos pero si sus posiciones
            en la siguiente región. Inicia indicando la longitud en elementos que contiene la región, cada elemento 
            se conforma por 3 conjuntos de 4 bytes. El primero será el identificador de qué tipo de dato es, el siguiente
            suele ser su valor, y el tercero solo se usa en tipos de datos object, array y strings.

        - Textos
            Los textos usados por los elementos declarados como textos se ecnuentran almacenados en esta región.
            Inicia declarando con 4 bytes en little endian el largo en bytes de toda la región, seguido de todos
            los textos juntos, cada uno terminado con un byte nulo.

        - Objetos sin cabeceras
            Esta región indica aquellos elementos que no incluyen cabeceras, se usa para aquellos elementos que 
            se encuentran dentro de una lista. Inicia indicando la longitud de elementos de la región, seguido del 
            índice de aquel elemento que no tiene cabecera. Cada indicador se representa igualmente con 4 bytes en 
            little endian.

        - Posiciones de cabeceras
            Aquí es donde se encuentra la información de cada cabecera y el índice del elemento al que pertenece. Inicia
            con 4 bytes indicando la cantidad de elementos con los que cuenta, estos elementos a su vez tienen una longitud
            de 3 conjuntos de 4 bytes. Los primeros 4 bytes son un checksum JOAAT (kind of) del texto de la cabecera, los siguientes
            son la posición del texto de la cabecera en la siguiente región, y el último conjunto es el índice del elemento
            al que pertenece.
```