# SOLID

### Un poco de historia
**SOLID** es el acrónimo que acuñó Michael Feathers, basándose en los principios de la programación orientada a objetos que Robert C. Martin había recopilado en el año 2000 en su paper “Design Principles and Design Patterns”.
Ocho años más tarde, el tío Bob siguió compendiando consejos y buenas prácticas de desarrollo y se convirtió en el padre del código limpio con su célebre libro Clean Code, del que ya hablamos en la recopilación de libros esenciales para desarrolladores.
### Los principios SOLID
Los 5 principios SOLID de diseño de aplicaciones de software son:
  Colons can be used to align columns.

| Inicial       | Acrónimo        | Concepto  |
| ------------- |:-------------:| -----:|
| S     | SRP	  | Principio de responsabilidad única (Single responsibility principle) la noción de que un objeto solo debería tener una única razón para cambiar.| |
| O     | OCP	     | Principio de abierto/cerrado (Open/closed principle) la noción de que las “entidades de software … deben estar abiertas para su extensión, pero cerradas para su modificación”. |
| L| LSP	    | Principio de sustitución de Liskov (Liskov substitution principle) la noción de que los “objetos de un programa deberían ser reemplazables por instancias de sus subtipos sin alterar el correcto funcionamiento del programa”. Véase también diseño por contrato. |
| I    | ISP      | Principio de segregación de la interfaz (Interface segregation principle)la noción de que “muchas interfaces cliente específicas son mejores que una interfaz de propósito general”.​ |
| D | DIP	     | Principio de inversión de la dependencia (Dependency inversion principle) la noción de que se debe “depender de abstracciones, no depender de implementaciones”. La Inyección de Dependencias es uno de los métodos que siguen este principio.
 |


Entre los objetivos de tener en cuenta estos 5 principios a la hora de escribir código encontramos:

    - Crear un software eficaz: que cumpla con su cometido y que sea robusto y estable.
    - Escribir un código limpio y flexible ante los cambios: que se pueda modificar fácilmente según necesidad, que sea reutilizable y mantenible.
    - Permitir escalabilidad: que acepte ser ampliado con nuevas funcionalidades de manera ágil.

En definitiva, desarrollar un software de calidad.
En este sentido la aplicación de los principios SOLID está muy relacionada con la comprensión y el uso de patrones de diseño, que nos permitirán mantener una alta cohesión y, por tanto, un bajo acoplamiento de software.
### ¿Qué son la cohesión y el acoplamiento?

**Acoplamiento**

_se refiere al **grado de interdependencia que tienen dos unidades de software entre sí**, entendiendo por unidades de software: clases, subtipos, métodos, módulos, funciones, bibliotecas, etc._

_Si dos unidades de software son completamente independientes la una de la otra, decimos que están desacopladas._

**Cohesión**

_es el **grado en que elementos diferentes de un sistema permanecen unidos para alcanzar un mejor resultado** que si trabajaran por separado. Se refiere a la forma en que podemos agrupar diversas unidades de software para crear una unidad mayor._

### 1. Principio de Responsabilidad Única
**“A class should have one, and only one, reason to change.”**

La S del acrónimo del que hablamos hoy se refiere a Single Responsibility Principle (SRP). Según este principio “una clase debería tener una, y solo una, razón para cambiar”. Es esto, precisamente, “razón para cambiar”, lo que Robert C. Martin identifica como **“responsabilidad”.**

El principio de Responsabilidad Única es el más importante y fundamental de SOLID, muy sencillo de explicar, pero el más difícil de seguir en la práctica.

El propio Bob resume cómo hacerlo: “Gather together the things that change for the same reasons. Separate those things that change for different reasons”, es decir: “Reúne las cosas que cambian por las mismas razones. Separa aquellas que cambian por razones diferentes”.

### 2. Principio de Abierto/Cerrado
**“You should be able to extend a classes behavior, without modifying it.”**

El segundo principio de SOLID lo formuló Bertrand Meyer en 1988 en su libro “Object Oriented Software Construction” y dice: “Deberías ser capaz de extender el comportamiento de una clase, sin modificarla”. En otras palabras: las clases que usas deberían estar abiertas para poder extenderse y cerradas para modificarse.

En su blog Robert C. Martin defendió este principio que a priori puede parecer una paradoja. Es importante tener en cuenta el Open/Closed Principle (OCP) a la hora de desarrollar clases, librerías o frameworks.

### 3. Principio de Sustitución de Liskov
**“Derived classes must be substitutable for their base classes.”**

La L de SOLID alude al apellido de quien lo creó, Barbara Liskov, y dice que “las clases derivadas deben poder sustituirse por sus clases base”.

Esto significa que los objetos deben poder ser reemplazados por instancias de sus subtipos sin alterar el correcto funcionamiento del sistema o lo que es lo mismo: si en un programa utilizamos cierta clase, deberíamos poder usar cualquiera de sus subclases sin interferir en la funcionalidad del programa.  

Según Robert C. Martin incumplir el Liskov Substitution Principle (LSP) implica violar también el principio de Abierto/Cerrado.

### 4. Principio de Segregación de la Interfaz
**“Make fine grained interfaces that are client specific.”**

En el cuarto principio de SOLID, el tío Bob sugiere: “Haz interfaces que sean específicas para un tipo de cliente”, es decir, para una finalidad concreta.

En este sentido, según el Interface Segregation Principle (ISP), es preferible contar con muchas interfaces que definan pocos métodos que tener una interface forzada a implementar muchos métodos a los que no dará uso.

### 5. Principio de Inversión de Dependencias
**“Depend on abstractions, not on concretions.”***

Llegamos al último principio: **“Depende de abstracciones**, no de clases concretas”.

Así, Robert C. Martin recomienda:

> 1. Los módulos de alto nivel no deberían depender de módulos de bajo nivel. Ambos deberían depender de abstracciones.
> 2. Las abstracciones no deberían depender de los detalles. Los detalles deberían depender de las abstracciones.

El objetivo del Dependency Inversion Principle (DIP) consiste en reducir las dependencias entre los módulos del código, es decir, alcanzar un bajo acoplamiento de las clases. 