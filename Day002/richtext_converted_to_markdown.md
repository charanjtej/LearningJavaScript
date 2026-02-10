# JavaScript Data Types

In JavaScript data types are broadly categorized into 

* Primitive Data Types

* Non-Primitive Data Types [or Reference Data types]

The **Core Difference** lies in :

* How they are **stored in memory**?

* How they are **accessed from memory**?

* Whether they are **mutable**[changeable]?

## Primitive Data Type:

* Represents a single value _[simplest building block of data]_.

* Directly stored in memory stack.

* They don't have methods or properties.

* Primitive Data Types are immutable[**value cannot be changed once created**].
  
  * variable must be _reassigned to a new value_ to change it.
  
  
  
  ```js
  let name = "Mark"; 
  console.log(name); //Mark
  name[0] = L;
  console.log(name); //Mark (since String is immutable, value cannot change)
  ```

### Storage & Access

* Stores actual value directly in memory.

* **Pass By Value**: When you assign a primitive value to another variable, Javascript creates _copy of that value_.
  
  ```js
  /**
  Pass By Vaue: The new variables gets its own independent copy of value.
  CHANGING ONE DOESNOT AFFECT ANOTHER.
  */
  let a = 10;
  let b = a;
  b = 20;
  console.log(a); // 10
  console.log(b); // 20
  ```

### 7 Primitive Data Types

#### 1.Number:

            <u>Integers</u> & <u>floating-point</u> numbers.

#### 2. String:

            Textual data enclosed in <u>quotes</u> **singular (') or double(")**.

#### 3. Boolean:

            Logical values, either <u>true</u> or <u>false</u>.

#### 4. Undefined:

            A variable that been declared but <u>not assigned</u> to a value.

#### 5. Null:

            Represents **intentional absence** of value.

            Note: Due to <u>long-standing</u> bugin in JavaScript, **typeof null** returns "object". but it is distinct from objects.

#### 6. Symbol:

            Unique and immutable identifiers often used as object keys.

#### 7. BigInt:

            Integers too large for the standard Number type.



## Reference Data Type

Reference types are used to store collections of data or complex entities.

Unlike Primitives they are **mutable**. i.e, modify properties or elements without _reassigning entire variable_.

### Storage and Access

Variables for reference types don't store the data itself, instead, they store a reference(or pointer) to a location in memory (the heap) where object is actually stored.

**Pass By Reference**: when we assign a reference type to a new variable, you are copying the memory address, not the actual data.

Both variables end up pointing to the exact same object in memory.






