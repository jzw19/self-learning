# Lists and Tuples
- Tuples
  - Are declared using parentheses "()"
  - Are immutable
    - This implies that built-in methods for "modification" actually create a new tuple
  - Are indexed
    - Implies that methods like "slice" are available
  - Allow mixed types
  - Are referenced by memory location
    - `a = {"foo"}; b = a` will result in `a` and `b` both pointing to the same tuple
- Lists
  - Are declared using square brackets "[]"
  - Are mutable
    - This implies that built-in methods directly modify the list
  - Are indexed
    - Implies that methods like "slice" are available
  - Allow mixed types
  - Are referenced by memory location
    - - `a = {"foo"}; b = a` will result in `a` and `b` both pointing to the same list
  - Common methods:
    - `extend` - equivalent of JS `concat`. Allows concatenation of multiple elements.
      - Addition using the `+` operator does the same thing
    - `append` - adds a single element to the list.
    - `del(list[0])` - deletes the item in list at index 0.
    - `sorted(list)` - sorts the list (ascending order by default)
- Lists and tuples can be cloned using the following syntax: `b = a[:]` where `a` is an existing list or tuple
  - Take note that this syntax creates a SHALLOW copy, not a deep one
  - For deep copies, import a library like `copy` and use their methods (e.g. `copy.deepcopy`)

# Dictionaries
- Same syntax as JS object (curly braces `{}`)
- Values are accessed using bracket notation (`[]`)
- Entries are removed using `del(dict["key"])`
- Existence check on keys allowed using `in`
- `dict.keys()` returns all keys as an array
  - Array can be converted to a list using the syntax `list(keyArray)`

# Sets
- Same as sets in JS (holds a collection of unique values. Duplicates are ignored)
- `list` can be casted to `set` using the notation `set(aList)`
- Set operations
  - `.add()`
  - `.remove()`
  - `in`
  - `&` -> intersection (AND in a venn diagram)
  - `.union()` -> union (OR in a venn diagram)
  - `A.difference(B)` -> all elements in A that are not in B
  - `A.issuperset(B)` -> all elements in B exist within A
  - `A.issubset(B)` -> all elements in A exist within B

# Conditions and Branching
- if/else syntax uses colons
  - e.g.
    ```python
    if (condition):
      # parentheses around the condition are optional
      # ...code...
    elif condition:
      # ...code...
    else:
      # ...more code...
    ```
- boolean logic on conditions is applied using `and`, `or` and `not` (unlike JS where symbols are used)

# Loops
- common syntax:
  ```python
  for i in range(0,5):
    # code block to run in loop is identified by indentation
  # outside of the loop

  for square in squares:
    # loop logic
  
  for i, square in enumerate(squares):
    # now we have access to index and element
  
  while (condition):
    # loop logic
  ```

# Functions
- syntax:
  ```python
  def myFunc(param1, param2):
    # do stuff
    # optionally return stuff. When nothing is explicitly returned, then the function returns the `none` object by default
    return stuff
  # decrease indent to indicate end of definition

  # Functions are not allowed to have an empty body. The `pass` keyword can be used to satisfy this requirement, if needed
  def emptyBody():
    pass
  ```
- Function vs. Method
  - Functions are not associated with any object
  - Methods are defined in and tied to an object
- Variable scope
  - Variables declared inside of functions are local to that function unless explicitly specified with the `global` keyword
  - Variables declared outside of functions are "global" at the _module_ level
  - The convention is to prefix "private" global variable names with double underscores (e.g. `__GLOBALVAR`).
  - Declaring a local variable with the same name as a global variable "overrides" the global variable within the context of the function. Changes to the local variable do not affect the global variable, meaning they point to different locations in memory.
    - Referring to the variable name outside of the context of the function will return the value defined at the global scope
  
# Exception Handling
- Exceptions vs. Errors
  - Exceptions
    - are usually caused by problematic code execution
    - are generally less severe and don't necessarily result in program termination
    - can be caught for custom handling
    - are categorized into classes based on their nature
  - Errors
    - are usually caused by issues with the environment, hardware or operating system
    - are generally severe and often lead to program crashes or abnormal termination
    - not usually caught or handled by the program
    - are not classified into categories

# Objects and Classes
- Use `type(anObject)` to get the type of an object
- Use `dir(anObject)` to get the list of data attributes and methods associated with a class
- Double underscores around an attribute name are indicative of attributes that are for internal use by the object or class (e.g. `__hash__`)
