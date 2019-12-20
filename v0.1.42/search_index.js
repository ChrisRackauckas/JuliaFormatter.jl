var documenterSearchIndex = {"docs":
[{"location":"style/#Style-1","page":"Code Style","title":"Style","text":"","category":"section"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"This is meant to give an impression of how the ouput of a formatted file looks like. Additional examples can be found in the test files.","category":"page"},{"location":"style/#Initial-FST-1","page":"Code Style","title":"Initial FST","text":"","category":"section"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"All examples assume indentation of 4 spaces","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"Functions, macros, structs with no arguments are placed on a single line:","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"function  foo\n end\n\n->\n\nfunction foo end","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"This also applies to abstract and primitive types:","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"abstract type\nAbstractFoo\nend\n\n->\n\nabstract type AbstractFoo end","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"Functions calls foo(args...), tuples (args...), arrays [args...], braces {args...}, struct or where definitions Foo{args...} are placed on a single line. This applies to any code which has opening and closing punctuation: (...), {...}, [...].","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"f(\na,b\n,c )\n\n->\n\nf(a, b, c)","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"By default type definitions have no whitespace after commas:","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"Foo{\na,b\n,c }\n\n->\n\nFoo{a,b,c}","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"Blocks and their bodies are spread across multiple lines properly indented.","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"Example 1:","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"begin\n  a\n    b; c\n       end\n\n->\n\nbegin\n    a\n    b\n    c\nend","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"Example 2:","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"struct Foo{A, B}\n a::A\n  b::B\nend\n\n->\n\nstruct Foo{A,B}\n    a::A\n    b::B\nend","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"Binary calls are placed on a single line and separated by whitespace.  The exception to this are colon operations and operations inside an indexing expression. The latter being optional.","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"Example 1:","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"a+b\n\n-> \n\na + b","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"Example 2:","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"a : a : c\n\n->\n\na:b:c","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"Example 3:","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"list[a + b]\n\n->\n\nlist[a+b]","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"Conditionals are placed on a single line and separated by whitespace. ","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"cond1 ?\nexpr1 :     expr2\n\n->\n\ncond1 ? expr1 : expr2","category":"page"},{"location":"style/#Nesting-FST-1","page":"Code Style","title":"Nesting FST","text":"","category":"section"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"Binary operations and conditionals are nested back-to-front.","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"Example 1:","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"arg1 + arg2\n\n->\n\narg1 + \narg2","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"Example 2:","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"cond ? e1 : e2\n\n->\n\ncond ? e1 :\ne2\n\n->\n\ncond ? \ne1 :\ne2","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"If nesting is required for a = binary operation, the RHS is placed on the following line.","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"foo() = body\n\n->\n\nfoo() =\n    body","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"All arguments of a function call (applies to any opening/closing punctuation type) are nested if the expression exceeds the margin. The arguments are indented one level. ","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"function longfunctionname_that_is_long(lots, of, args, even, more, args)\n    body\nend\n\n->\n\nfunction longfunctionname_that_is_long(\n    lots, \n    of, \n    args,\n    even, \n    more, \n    args,\n)\n    body\nend","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"With where operations (A where B), A is nested prior to B.","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"function f(arg1::A, key1 = val1; key2 = val2) where {A,B,C}\n    body\nend\n\n->\n\nfunction f(\n    arg1::A,\n    key1 = val1;\n    key2 = val2,\n) where {A,B,C}\n    body\nend\n\n-> \n\nfunction f(\n    arg1::A,\n    key1 = val1;\n    key2 = val2,\n) where {\n    A,\n    B,\n    C,\n}\n    body\nend","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"If a comment is detected inside of an expression, that expression is automatically nested:","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"var = foo(\n    a, b, # comment\n    c,\n)\n\n->\n\nvar = foo(\n    a,\n    b, # comment\n    c,\n)","category":"page"},{"location":"style/#Unnesting-FST-1","page":"Code Style","title":"Unnesting FST","text":"","category":"section"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"In certain cases it's desirable to unnest parts of a FST.","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"Example 1:","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"# short function def\nfunction foo(arg1, arg2, arg3) = body\n\n-> \n\nfunction foo(arg1, arg2, arg3) =\n    body\n\n->\n\nfunction foo(\n    arg1,\n    arg2,\n    arg3,\n) =\n    body\n\n# If the margin allows it, `body` will be joined back\n# with the previous line.\n\nfunction foo(\n    arg1,\n    arg2,\n    arg3,\n) = body","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"Example 2:","category":"page"},{"location":"style/#","page":"Code Style","title":"Code Style","text":"var = funccall(arg1, arg2, arg3)\n\n-> \n\nvar =\n    funccall(arg1, arg2, arg3)\n\n->\n\nvar =\n    funccall(\n        arg1,\n        arg2,\n        arg3,\n    )\n\n# If the margin allows it, the RHS will be joined back\n# with the previous line.\n\nvar = funccall(\n    arg1,\n    arg2,\n    arg3,\n)","category":"page"},{"location":"skipping_formatting/#Skipping-Formatting-1","page":"Skipping Formatting","title":"Skipping Formatting","text":"","category":"section"},{"location":"skipping_formatting/#","page":"Skipping Formatting","title":"Skipping Formatting","text":"By default formatting is always on but can be toggled with the following comments:","category":"page"},{"location":"skipping_formatting/#","page":"Skipping Formatting","title":"Skipping Formatting","text":"#! format: off\n# Turns off formatting from this point onwards\n...\n\n#! format: on\n# Turns formatting back on from this point onwards","category":"page"},{"location":"skipping_formatting/#","page":"Skipping Formatting","title":"Skipping Formatting","text":"These can be used throughout a file, or, for an entire file not be formatted add \"format: off\" at the top of the file:","category":"page"},{"location":"skipping_formatting/#","page":"Skipping Formatting","title":"Skipping Formatting","text":"#! format: off\n#\n# It doesn't actually matter if it's on\n# the first line of the line but anything\n# onwards will NOT be formatted.\n\nmodule Foo\n...\nend","category":"page"},{"location":"skipping_formatting/#","page":"Skipping Formatting","title":"Skipping Formatting","text":"Note the formatter expects #! format: on and #! format: off to be on its own line and the whitespace to be an exact match.","category":"page"},{"location":"transforms/#Syntax-Tree-Transformations-1","page":"Syntax Transforms","title":"Syntax Tree Transformations","text":"","category":"section"},{"location":"transforms/#for-in-vs.-for-1","page":"Syntax Transforms","title":"for in vs. for =","text":"","category":"section"},{"location":"transforms/#","page":"Syntax Transforms","title":"Syntax Transforms","text":"By default if the RHS is a range, i.e. 1:10 then for in is converted to for =. Otherwise for = is converted to for in. See this issue for the rationale and further explanation.","category":"page"},{"location":"transforms/#","page":"Syntax Transforms","title":"Syntax Transforms","text":"Alternative to the above - setting always_for_in to true, i.e. format_text(..., always_for_in = true) will always convert = to in even if the RHS is a range.","category":"page"},{"location":"transforms/#Trailing-Commas-1","page":"Syntax Transforms","title":"Trailing Commas","text":"","category":"section"},{"location":"transforms/#","page":"Syntax Transforms","title":"Syntax Transforms","text":"If the node is iterable, for example a function call or list and is nested, a trailing comma is added to the last argument. The trailing comma is removed if unnested:","category":"page"},{"location":"transforms/#","page":"Syntax Transforms","title":"Syntax Transforms","text":"func(a, b, c)\n\n->\n\nfunc(\n    a,\n    b,\n    c,\n)","category":"page"},{"location":"transforms/#","page":"Syntax Transforms","title":"Syntax Transforms","text":"See this issue for more details.","category":"page"},{"location":"transforms/#Trailing-Semicolons-1","page":"Syntax Transforms","title":"Trailing Semicolons","text":"","category":"section"},{"location":"transforms/#","page":"Syntax Transforms","title":"Syntax Transforms","text":"If a matrix node is nested the semicolons are removed.","category":"page"},{"location":"transforms/#","page":"Syntax Transforms","title":"Syntax Transforms","text":"A = [1 0; 0 1]\n\n->\n\nA = [\n    1 0\n    0 1\n]","category":"page"},{"location":"transforms/#","page":"Syntax Transforms","title":"Syntax Transforms","text":"See this issue for more details.","category":"page"},{"location":"transforms/#Leading-and-trailing-0s-for-float-literals-1","page":"Syntax Transforms","title":"Leading and trailing 0s for float literals","text":"","category":"section"},{"location":"transforms/#","page":"Syntax Transforms","title":"Syntax Transforms","text":"If a float literal is missing a trailing 0 it is added:","category":"page"},{"location":"transforms/#","page":"Syntax Transforms","title":"Syntax Transforms","text":"a = 1.\n\n->\n\na = 1.0","category":"page"},{"location":"transforms/#","page":"Syntax Transforms","title":"Syntax Transforms","text":"If a float literal is missing a leading 0 it is added:","category":"page"},{"location":"transforms/#","page":"Syntax Transforms","title":"Syntax Transforms","text":"a = .1\n\n->\n\na = 0.1","category":"page"},{"location":"transforms/#","page":"Syntax Transforms","title":"Syntax Transforms","text":"See this issue for more details.","category":"page"},{"location":"transforms/#Surround-where-arguments-with-curly-brackets-1","page":"Syntax Transforms","title":"Surround where arguments with curly brackets","text":"","category":"section"},{"location":"transforms/#","page":"Syntax Transforms","title":"Syntax Transforms","text":"If the arguments of a where call are not surrounded by curly brackets, they are added:","category":"page"},{"location":"transforms/#","page":"Syntax Transforms","title":"Syntax Transforms","text":"foo(x::T) where T = ...\n\n->\n\nfoo(x::T) where {T} = ...","category":"page"},{"location":"transforms/#","page":"Syntax Transforms","title":"Syntax Transforms","text":"See this issue for more details.","category":"page"},{"location":"#JuliaFormatter.jl-1","page":"Introduction","title":"JuliaFormatter.jl","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"(Image: Build Status)","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"Width-sensitive formatter for Julia code. Inspired by gofmt, refmt, and black. Built with CSTParser.","category":"page"},{"location":"#Installation-1","page":"Introduction","title":"Installation","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"]add JuliaFormatter","category":"page"},{"location":"#Quick-Start-1","page":"Introduction","title":"Quick Start","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"julia> using JuliaFormatter\n\n# Recursively formats all Julia files in the current directory\njulia> format(\".\")","category":"page"},{"location":"#Usage-1","page":"Introduction","title":"Usage","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"JuliaFormatter exports format_text, format_file and format:","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"format_text(\n    text::AbstractString;\n    indent = 4,\n    margin = 92,\n    always_for_in = false,\n    whitespace_typedefs::Bool = false,\n    whitespace_ops_in_indices::Bool = false,\n)\n\nformat_file(\n    file::AbstractString;\n    overwrite = true,\n    verbose = false,\n    indent = 4,\n    margin = 92,\n    always_for_in = false,\n    whitespace_typedefs::Bool = false,\n    whitespace_ops_in_indices::Bool = false,\n)\n\nformat(\n    paths...;\n    overwrite = true,\n    verbose = false,\n    indent = 4,\n    margin = 92,\n    always_for_in = false,\n    whitespace_typedefs::Bool = false,\n    whitespace_ops_in_indices::Bool = false,\n)","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"The text argument to format_text is a string containing the code to be formatted; the formatted code is retuned as a new string. The file argument to format_file is the path of a file to be formatted. The format function is either called with a singe string to format if it is a .jl file or to recuse into looking for .jl files if it is a directory. It can also be called with a collection of such paths to iterate over.","category":"page"},{"location":"#File-Options-1","page":"Introduction","title":"File Options","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"If overwrite is true the file will be reformatted in place, overwriting the existing file; if it is false, the formatted version of foo.jl will be written to foo_fmt.jl instead.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"If verbose is true details related to formatting the file will be printed to stdout.","category":"page"},{"location":"#Formatting-Options-1","page":"Introduction","title":"Formatting Options","text":"","category":"section"},{"location":"#","page":"Introduction","title":"Introduction","text":"indent - the number of spaces used for an indentation.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"margin - the maximum length of a line. Code exceeding this margin will be formatted across multiple lines.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"If always_for_in is true = is always replaced with in if part of a for loop condition.  For example, for i = 1:10 will be transformed to for i in 1:10.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"If whitespace_typedefs is true, whitespace is added for type definitions. Make this true if you prefer Union{A <: B, C} to Union{A<:B,C}.","category":"page"},{"location":"#","page":"Introduction","title":"Introduction","text":"If whitespace_ops_in_indices is true, whitespace is added for binary operations in indices. Make this true if you prefer arr[a + b] to arr[a+b]. Additionally, if there's a colon : involved, parenthesis will be added to the LHS and RHS. Example: arr[(i1 + i2):(i3 + i4)] instead of arr[i1+i2:i3+i4].","category":"page"},{"location":"how_it_works/#How-It-Works-1","page":"How It Works","title":"How It Works","text":"","category":"section"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"The formatter takes a .jl file as input and produce a idealized, formatted .jl as output. Some formatters mutate the state of the current file, JuliaFormatter takes a different approach - first generating a canonical output, and then mutating that canonical output; adhering to the indent and margin constraints.","category":"page"},{"location":"how_it_works/#Generating-an-FST-1","page":"How It Works","title":"Generating an FST","text":"","category":"section"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"The source code is parsed with CSTParser.jl which returns a CST (Concrete Syntax Tree). A CST is a one-to-one mapping of the language to a tree form. In most cases a more compact AST (Abstract Syntax Tree) representation is desired. However, since formatting manipulate the source text itself, the richer representation of a CST is incredibly useful.","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"Once the CST is created it's then used to generate a FST (Formatted Syntax Tree). ","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"Note: this is not an actual term, just something I made up. Essentially it's a CST with additional formatting specific metadata.","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"The important part of an FST is any .jl file that is syntactically the same (whitespace is irrelevant) produce an identical FST.","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"For example:","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"# p1.jl\na = \n       foo(a,                     b,           \n       c,d)","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"and","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"# p2.jl\na =                      foo(a,\nb,\nc,d)","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"will produce the same FST, which printed would look like:","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"# fst output\na = foo(a, b, c, d)","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"So what does a typical FST look like? ","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"Code is properly indented. Uncessary whitespace is removed. Comments and newlines are untouched.","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"If the expression can be put on a single line it will be. It doesn't matter  it's a function call which 120 arguments, making it 1000 characters long.  During this initial stage it will be put on a single line.","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"If the expression has a structure to it, such as a try, if, or 'struct' definition. It will be spread across multiple lines appropriately:","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"\n# original source\ntry a1;a2 catch e b1;b2 finally c1;c2 end\n\n-> \n\n# printed FST\ntry\n   a1\n   a2\ncatch e\n   b1\n   b2\nfinally\n   c1\n   c2\nend","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"With this FST representation it's much easier to determine when and how lines should be broken.","category":"page"},{"location":"how_it_works/#Nesting-breaking-lines-1","page":"How It Works","title":"Nesting - breaking lines","text":"","category":"section"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"During the nesting stage and original FST is mutated to adhere to the margin specification.","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"Throughout the previous stage, while the FST was being generated, PLACEHOLDER nodes were being inserted at various points. These can be converted to NEWLINE nodes during nesting, which is how lines are broken.","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"Assume we had a function call which went over the margin.","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"begin\n    foo = funccall(argument1, argument2, ..., argument120) # way over margin limit !!!\nend","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"It would be nested to","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"begin\n    foo = funccall(\n        argument1,\n        argument2,\n        ...,\n        argument120\n    ) # way over margin limit !!!\nend","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"You can read how code is nested in the style section.","category":"page"},{"location":"how_it_works/#","page":"How It Works","title":"How It Works","text":"Once the FST has been nested it's then printed out to a file and voila! You have a formatted version of your code!","category":"page"}]
}
