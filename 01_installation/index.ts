function full_name(name: string, surname: string): string {
    return name + " " + surname;
}

console.log(full_name("John", "Doe"));

// write [ tsc and file_name ] to run compiler and run program
// example [ tsc index.ts ]

// --------------------------------

// write [ tsc --init ] to create tsconfig.json file 
// example [ tsc --init ]

// --------------------------------

// after installing tsconfig.json file you can simply write [ tsc ] to run compiler
// example [ tsc ]

// after creating [ tsconfig.json ] enable ["noEmitOnError": true,] by comment out [ "noEmitOnError": true, ]

// --------------------------------

// if there is an any error on ts file and ts file still compile create js file [ noEmitOnError ] fix this error.

