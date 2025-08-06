# Linear Algebra Review
- Matrix dimensions are expressed in the format of `rows x columns` (e.g. `4 x 3`)
- $A_{ij}$ refers to the element in matrix $A$ that is in the $i^{th}$ row and $j^{th}$ column
- A vector is an `n x 1` matrix (1 column)
  - Vectors may be 1-indexed or 0-indexed
  - Unless otherwise specified, assume that vectors are 1-indexed
- Uppercase letters are usually used to refer to matrices
- Lowercase letters are usually used to refer to scalars or vectors
- $\mathbb{R}$ refers to the set of scalar real numbers.
- $\mathbb{R}^n$ refers to the set of n-dimensional vectors of real numbers.
- Matrix addition and scalar multiplication are straightforward and done element-by-element where the row and column match
  - To perform addition, all matrix dimensions must match
  - Scalar multiplication is just a single number multiplied with all elements in a matrix
- Matrix multiplication
  - Requirement - to multiply matrix A with matrix B, the number of columns in A must match the number of rows in B
    - (m x n) x (n x p) &larr; where matrix dimensions are in parentheses
    - e.g.<br/>
            | 1 2 |&nbsp;&nbsp;&nbsp;&nbsp;| 1 |&nbsp;&nbsp;&nbsp;&nbsp;| 1(1) + 2(2) |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp; 5 &nbsp;|<br/>
            | 3 4 |&nbsp;x&nbsp;| 2 | = | 3(1) + 4(2) | = | 11 |<br/>
            | 5 6 |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 5(1) + 6(2) |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| 17 |
  - Matrix-matrix multiplication is a key concept when solving for the $\theta$ parameters in linear regression
  - Like how the reciprocal of a number is its inverse, the inverse of a matrix is the matrix that satisfies the condition that when the original matrix and the inverse matrix are multiplied, the result is the identity matrix.
    - Formally, for matrix $A$ and identity matrix $I$, <br/>$A(A^{-1}) = A^{-1}A = I$
    - In order to have an inverse, the number of rows and columns in the matrix must match
    - A matrix that does not have an inverse is called "singular" or "degenerate"
  - The transpose T of a matrix A is one where the columns of T are equal to the corresponding rows of A
    - Another way to visualize this is by reflecting the matrix over a $45^{\circ}$ diagonal line that crosses from the top-left to the bottom-right corner of the matrix 
