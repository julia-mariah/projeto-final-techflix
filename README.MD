# TechFlix

## Version 1.0

[**www.techflix.com.br**](http://www.techflix.com.br)

## Descrição da API (RestFull-CRUD)

Plataforma que agrega vídeos e oportunidades voltadas ao universo DEV e TI, agregadas por temas, professores, influencers.

Poderá ser separado por free e pago, (no caso de videos com patrocínio) e parte desse valor arrecadado vai para o instituto coligado para fomentar a inclusão e diversidade, denominado  **www.transprograma.com**

## Rotas

### [GET] "/"                (Apresentação da API)

**protocolo : http**

**status: 200 ok**

resposta servidor:

```json
{
    "message": "Olá !! Aqui você vai encontrar muita ajuda para quem está inciando no unverso do TI",
    "version": 1,
    "autor": "Julia Mariah",
    "site": "www.techflix.com.br"
}
```

### [GET] "/videos"                (read)

**protocolo : http**

**status: 200 ok**

resposta servidor:

```json
[
    {
        "avaliacao": 10,
        "postadoEm": "2021-07-06T04:27:28.120Z",
        "_id": "60e3dbbcdae08c235c85c37f",
        "titulo": "como ser front end",
        "tema": "front end",
        "descricao": "como aprender front end",
        "acesso": "gratuito",
        "faixaEtaria": 0,
        "nivel": "iniciante",
        "duracao": "01 hora e 12 minutos",
        "__v": 0,
        "link": "https://www.youtube.com/watch?v=ZY3-MFxVdEw&ab_channel=AluraCursosOnline"
    },
    {
        "avaliacao": 10,
        "postadoEm": "2021-07-07T23:55:40.887Z",
        "_id": "60e63f0ef1052e29c88b4ab4",
        "titulo": "como ser uma dev",
        "tema": "backend",
        "descricao": "Relação de cursos gerais",
        "acesso": "gratuito",
        "link": "https://www.youtube.com/user/aluracursosonline",
        "faixaEtaria": 0,
        "nivel": "iniciante",
        "duracao": "01 hora e 12 minutos",
        "__v": 0
    }
]
```

### [GET] "/videos/:id"                (read by ID)

**protocolo : http**

**status: 200 ok**

resposta servidor:

```json
{
    "avaliacao": 10,
    "postadoEm": "2021-07-08T02:55:17.833Z",
    "_id": "60e3dbbcdae08c235c85c37f",
    "titulo": "como ser front end",
    "tema": "front end",
    "descricao": "como aprender front end",
    "acesso": "gratuito",
    "faixaEtaria": 12,
    "nivel": "iniciante",
    "duracao": "01 hora e 12 minutos",
    "link": "https://www.youtube.com/watch?v=ZY3-MFxVdEw&ab_channel=AluraCursosOnline"
}
```

### [POST] "/videos/"           (create)

**protocolo : http**

body: 

```json
{
"titulo":"como ser uma dev - parte 1",
"tema":"backend",
"descricao":"Relação de cursos backend",
"link": "https://www.youtube.com/user/aluracursosonline",
"acesso":"gratuito",
"faixaEtaria":0,
"nivel":"iniciante",
"avaliacao":10,
"duracao":"01 hora e 12 minutos"
}

```

**status: 201 ok**

resposta servidor :

```json
{
    "message": "video criado",
    "video": {
        "avaliacao": 10,
        "postadoEm": "2021-07-08T02:14:52.820Z",
        "titulo": "como ser uma dev - parte 1",
        "tema": "backend",
        "descricao": "Relação de cursos backend",
        "acesso": "gratuito",
        "link": "https://www.youtube.com/user/aluracursosonline",
        "faixaEtaria": 0,
        "nivel": "iniciante",
        "duracao": "01 hora e 12 minutos",
        "_id": "60e65fb17bd41e3ff8e26867",
        "__v": 0
    }
}
```

## [PATCH] "/videos/id"                  (update)

**protocolo : http**

body:

```json
{
"link": "https://www.youtube.com/watch?v=ZY3-MFxVdEw&ab_channel=AluraCursosOnline"
}
```

### status : 200 ok

resposta servidor:

```json
{
    "message": "video Atualizado",
    "videoAtualizado": {
        "avaliacao": 10,
        "postadoEm": "2021-07-06T04:27:28.120Z",
        "_id": "60e3dbbcdae08c235c85c37f",
        "titulo": "como ser front end",
        "tema": "front end",
        "descricao": "como aprender front end",
        "acesso": "gratuito",
        "faixaEtaria": 0,
        "nivel": "iniciante",
        "duracao": "01 hora e 12 minutos",
        "__v": 0,
        "link": "https://www.youtube.com/watch?v=ZY3-MFxVdEw&ab_channel=AluraCursosOnline"
    }
}
```

## [PUT] "/videos/id"                    (update)

**protocolo :  http**

body:

```json
{
        "avaliacao": 10,               
        "titulo": "como ser front end",
        "tema": "front end",
        "descricao": "como aprender front end",
        "acesso": "gratuito",
        **"faixaEtaria": 12,**
        "nivel": "iniciante",
        "duracao": "01 hora e 12 minutos",        
        "link": "https://www.youtube.com/watch?v=ZY3-MFxVdEw&ab_channel=AluraCursosOnline"
    }
```

## **status 200 ok**

resposta servidor :

```json
{
    "avaliacao": 10,
    "postadoEm": "2021-07-08T02:55:17.833Z",
    "_id": "60e3dbbcdae08c235c85c37f",
    "titulo": "como ser front end",
    "tema": "front end",
    "descricao": "como aprender front end",
    "acesso": "gratuito",
    **"faixaEtaria": 12,**
    "nivel": "iniciante",
    "duracao": "01 hora e 12 minutos",
    "link": "https://www.youtube.com/watch?v=ZY3-MFxVdEw&ab_channel=AluraCursosOnline"
}
```

## [DELETE] "/videos/id                          (delete)

**protocolo: http** 

**status 200 ok**

resposta servidor:

```json
{
    "message": "video deletado",
    "video": {
        "avaliacao": 10,
        "postadoEm": "2021-07-07T23:55:40.887Z",
        "_id": "60e63f0ef1052e29c88b4ab4",
        "titulo": "como ser uma dev",
        "tema": "backend",
        "descricao": "Relação de cursos gerais",
        "acesso": "gratuito",
        "link": "https://www.youtube.com/user/aluracursosonline",
        "faixaEtaria": 0,
        "nivel": "iniciante",
        "duracao": "01 hora e 12 minutos",
        "__v": 0
    }
}
```

### [GET] "/usuarios"       (getAll)

**protocolo : http**

**status: 200 ok**

resposta servidor:

```json
[
    {
        "assinante": false,
        "ingressouEm": "2021-07-09T21:56:45.721Z",
        "_id": "60e8c627df13d52120712755",
        "nome": "Julia Mariah",
        "cpf": 11122233301,
        "email": "juliamariah.net@gmail.com",
        "idade": 51,
        "__v": 0
    },
    {
        "assinante": false,
        "ingressouEm": "2021-07-09T21:56:45.721Z",
        "_id": "60e8c66fdf13d52120712757",
        "nome": "Beatriz Maravilhosa",
        "cpf": 15522233301,
        "email": "bea.net@gmail.com",
        "idade": 24,
        "__v": 0
    }
]
```

### [GET] "/usuarios/:id"                (read by ID)

**protocolo : http**

**status: 200 ok**

resposta servidor:

```json
{
    "assinante": false,
    "ingressouEm": "2021-07-09T21:56:45.721Z",
    "_id": "60e8c627df13d52120712755",
    "nome": "Julia Mariah",
    "cpf": 11122233301,
    "email": "juliamariah.net@gmail.com",
    "idade": 51,
    "__v": 0
}
```

### [POST] "/usuarios/"

**protocolo : http**

body: 

```json
{
      "nome": "Beatriz Maravilhosa",
      "cpf": "15522233301",
      "email": "bea.net@gmail.com",
      "idade": 24,
      "assinante": false

}
```

**status: 201 ok**

resposta servidor :

```json
{
    "message": "usuario criado",
    "usuario": {
        "assinante": false,
        "ingressouEm": "2021-07-09T21:56:45.721Z",
        "nome": "Beatriz Maravilhosa",
        "cpf": 15522233301,
        "email": "bea.net@gmail.com",
        "idade": 24,
        "_id": "60e8c66fdf13d52120712757",
        "__v": 0
    }
}
```

## [PATCH] "/usuarios/id"

**protocolo : http**

body:

```json
{

"email":"bea2021@hotmail.com"

}
```

### status : 200 ok

resposta servidor:

```json
{
    "message": "usuario Atualizado",
    "usuarioAtualizado": {
        "assinante": false,
        "ingressouEm": "2021-07-09T21:56:45.721Z",
        "_id": "60e8c66fdf13d52120712757",
        "nome": "Beatriz Maravilhosa",
        "cpf": 15522233301,
        "email": "bea2021@hotmail.com",
        "idade": 24,
        "__v": 0
    }
}
```

## [PUT] "/usuarios/id"                            (update)

**protocolo :  http**

body:

```json
{ 
      "nome": "Beatriz Maravilhosa da Silva",
      "cpf": "15522233301",
      "email": "bea.net@bagveloz.com",
      "idade": 24,
      "assinante": false
}
```

## **status 200 ok**

resposta servidor :

```json
{
    "assinante": false,
    "ingressouEm": "2021-07-09T21:56:45.721Z",
    "_id": "60e8c66fdf13d52120712757",
    "nome": "Beatriz Maravilhosa da Silva",
    "cpf": 15522233301,
    "email": "bea.net@bagveloz.com",
    "idade": 24
}
```

## [DELETE] "/usuarios/id                          (delete)

**protocolo: http** 

**status 200 ok**

resposta servidor:

```json
{
    "message": "usuario deletado",
    "usuario": {
        "assinante": false,
        "ingressouEm": "2021-07-09T21:56:45.721Z",
        "_id": "60e8c66fdf13d52120712757",
        "nome": "Beatriz Maravilhosa da Silva",
        "cpf": 15522233301,
        "email": "bea.net@bagveloz.com",
        "idade": 24
    }
}
```