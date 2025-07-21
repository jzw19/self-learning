# Octave/Matlab Tutorial
- Octave
  - Octave was written in C++ using the C++ standard library
  - Basic Operations
    - Standard math symbols `+, -, *, /, ^`
    - Not equals uses tilde `~=`
    - Logical boolean operators `&&, ||, xor`
    - Variable assignment `foo = 3;`
      - Semicolon is optional. It suppresses output.
    - Print formatted output of a variable with newline `disp(foo)`
    - Formatted string interpolation `sprintf('2 decimals: %0.2f', a)`
    - Format previous output as type `format long`, `format short`
    - Matrix assignment `A = [1 2; 3 4; 5 6]`
      - Semicolon `;` denotes end of row
    - Step difference vector `v = 1:0.1:2` &larr; range is inclusive; results in a vector where each element is `0.1` apart. When step is not provided, the default difference is 1.
    - Ones matrix `B = ones(2,3)` &larr; produces a 2-row x 3-column matrix of 1's
      - Can be multiplied by a scalar to create similar matrices with different values `B = 2*ones(2,3)`
    - Matrix of random numbers between 0 and 1 (exclusive) `w = rand(1,3)` &larr; produces a 1-row x 3-column matrix of random numbers (within the closed interval between 0 and 1)
      - `randn` uses a normal distribution
    - `hist(foo)` &larr; plots a histogram from a given vector. Uses 10 bins by default.
      - Given another vector in the 2nd argument, uses this as the centers of the bins, with width determined from adjacent values in the vector
      - Given a scalar in the 2nd arg, defines the number of bins
      - See docs for further behavior
    - `eye(3)` &larr; creates an identity matrix of the given size
    - `help eye` &larr; prints documentation for the given function (`eye` in this example)
  - Moving Data Around
    - `size(A)` &larr; print the dimensions of matrix A
    - `length(A)` &larr; print out the longest dimension of A. This is usually used on vectors.
    - `pwd` &larr; print working directory
    - `cd` &larr; change directory
    - `ls` &larr; list all files and directories at current location
    - `who` &larr; list all variables currently in memory
      - `whos` &larr; list with more details about those variables
    - `clear variableName` &larr; removes the variable identified by `variableName` from memory
    - `save filename_with_extension variableName` &larr; saves the output of the provided variable in the file specified at the current path location
  - Computing on Data
    - Matrix indexing operations are the same as MATLAB (e.g. `A(:,2)` outputs all rows in column 2 of matrix A (1-indexed))
      - `A(:)` outputs a vector made from all elements of A by reading each column of each row
        - e.g. if `A = [1 2; 3 4; 5 6]`, then `A[:] = [1;3;5;2;4;6]` or in the more human-readable format:
          ```
          A =
            1
            3
            5
            2
            4
            6
          ```
    - `A = [A, [100; 101; 102]]` &larr; appends a column to A
    - Matrix concatenation:
      ```
      A = [1 2; 3 4; 5 6]
        1   2
        3   4
        5   6

      B = [7 8; 9 10; 11 12]
        7   8
        9   10
        11  12
      C = [A B]
        1   2   7   8
        3   4   9   10
        5   6   11  12
      D = [A; B]
        1   2
        3   4
        5   6
        7   8
        9   10
        11  12
      ```
    - `A .* B` performs dot product (element-wise) multiplication of 2 matrices
      - `.` can be prepended to other math operators for element-wise operations, too
    - `abs()` &larr; absolute value function
    - `A'` &larr; output the transpose of matrix `A`
    - `max(A)` &larr; return the max value of each column in A (by default)
      - `[val, ind] = max(A)` &larr; assign the max value of A and its corresponding index to `val` and `ind` respectively
      - `max(A, B)` &larr; return the max value of each element between A and B
    - `magic(3)` &larr; creates a matrix of the given size where all the rows, columns and diagonals sum up to the same number. This is not typically useful for ML/AI, but it's cool to know
    - `[r,c] = find(A >= 7)` &larr; outputs and stores in `r` and `c` the row indices and column indices (both 1-indexed) of elements that pass the condition
    - `sum(A)` &larr; output the sum of all elements in A
    - `prod(A)` &larr; output the product of all elements in A
    - `floor(A)` &larr; output the floor of each element in A
    - `ceil(A)` &larr; output the ceiling of each element in A
  - Plotting Data
    - `plot(x,y)` &larr; plot function `y` with respect to `x`
      - Example:
        - `y1 = sin(2*pi*4*t)`
        - `plot(t, y1)`
    - `hold on` &larr; keep the figure from the previous output and continue using it for future calls to `plot`
      - this can be used to plot multiple lines on a single plot
    - `print -dpng 'myPlot.png'` &larr; save the plot as a PNG file
    - `clf` &larr; clears the current figure
    - 
  - Control Statements
    - `for`
      - Example:
        ```c++
        for i=1:10,
          v(i) = 2^i;
        end;
        ```
    - `while`
      - Example:
        ```c++
        while i <= 5,
          v(i) = 100;
          i = i+1;
        end;
        ```
    - `break` exists
    - `if` blocks must be terminated with `end` as well
  - Functions
    - Are defined in separate files. Octave needs to be pointed to the PATH where they are stored.
      - Functions are defined by their filename (the file extension is `.m`; e.g. `squareThisNumber.m`)
    - Example Syntax:
      ```c++
      // squareThisNumber.m
      function y = squareThisNumber(x)

      y = x^2;
      ```
    - Functions may return multiple values
      - Example:
        ```c++
        // squareAndCubeThisNumber.m
        function [y1,y2] = squareAndCubeThisNumber(x)

        y1 = x^2;
        y2 = x^3;
        ```
  - Vectorization
    - People who write libraries for linear algebra already optimized the code to run efficiently, so it is often more readable _and_ efficient to use these where available
    - Vectorization is effectively the act of extracting a common vector from a set of equations and multiplying the equations by it (like extracting a common multiple from a single equation)
      - The common vector is often denoted by $\delta$
