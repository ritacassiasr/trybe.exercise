const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:2 - Retorne o nome do livro de menor nome.
// Dica: use a função forEach.

function SmallerName() {
  let nameBook; // não guarda nenhum valor, a princípio. 
  books.forEach((book) => {
    if (!book.name || book.name.length < nameBook.length) {
    // por não guardar nenhum valor, na primeira iteração, daria false, mas com a "!" na frente, terá o valor de true. 
    // e nameBook recerá o valor true na primeira iteração, seguindo para a próxima iteração.
    // Na segunda iteração será verificado o tamanho do nome do livro. Se for menor que o tamanho do nameBook 
    //(que foi true na primeira iteração), ele será guardado em nameBook. 
      nameBook = book.name;
    }
  });
// variável nameBook que receberá o valor do menor nome; 
  return nameBook;
}

SmallerName();