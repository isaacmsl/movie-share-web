# Movie Share
![Contributions](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)
[![Heroku](https://heroku-badge.herokuapp.com/?app=movie-share-web)](https://movie-share-web.herokuapp.com)
![License](https://img.shields.io/github/license/isaacmsl/festival2020)

- [Reason](#motivo)
- [Resultados](#resultados)
    - [Estatísticas](##estatísticas)
    - [Exemplos de telas](##exemplos-de-telas)
- [Considereções Finais](#considerações-finais)
- [Autores](#autores)


## Reason

In the same way of Netflix Party, thats project aims make watching party more acessible and flexible, ex.: watch videos from dropbox links.

## Usage

The system was divided in two parts: administrator and clients. Administrator can play, pause and set video time. Clients received those events and request current time.

To be an administrator and set video url from Dropbox, acess:
- https://movie-share-web.herokuapp.com/admin.html

To be an client, jus t acess:
- https://movie-share-web.herokuapp.com/


## Current results

Na **Figura 1**, resumidamente, é possível observar as funcionalidades disponíveis para os administradores. Já na **Figura 2** é possível observar a tela em que todos os usuários confirmam as presenças nas aulas das oficinas.

[Clique aqui para conferir o site completo](https://festivalmfld2020.vercel.app/)

<a href="https://user-images.githubusercontent.com/31693006/94610888-5972ed80-0277-11eb-9661-d3674563eba4.png">
    <img src="https://user-images.githubusercontent.com/31693006/94773894-1b6aec00-0393-11eb-8e0f-7d29a371656b.png">
    Picture 1 - Client index page
</a>

<a style="width: 50%" href="https://user-images.githubusercontent.com/31693006/94611527-3dbc1700-0278-11eb-8668-6fc120152760.png">
    <img src="https://user-images.githubusercontent.com/31693006/94774038-671d9580-0393-11eb-83b9-dcc668af1ff1.png" width="100%" >    
    Picture 2 - Administrator index page
</a>   
 
<a style="width: 50%" href="https://user-images.githubusercontent.com/31693006/94774223-cc718680-0393-11eb-9f00-5fd77be3481b.png">
    <img src="https://user-images.githubusercontent.com/31693006/94774223-cc718680-0393-11eb-9f00-5fd77be3481b.png" width="100%" >    
    Picture 3 - Existing username error 
</a>     

<a style="width: 50%" href="https://user-images.githubusercontent.com/31693006/94774577-8a951000-0394-11eb-972c-cd880fcaba4f.png">
    <img src="https://user-images.githubusercontent.com/31693006/94774577-8a951000-0394-11eb-972c-cd880fcaba4f.png" width="100%" >    
    Picture 4 - Popup example user joining
</a>

## Tools

- [Socket.io](https://socket.io/) - to do a real-time video events (Play, pause etc);

## Usage

Para o 12º Festival Maestro Felinto Lúcio dantas, os [autores](#autores) pretendem refatorar boa parte do software e adicionar as funcionalidades carentes.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

MIT

## Authors

[<img src="https://avatars3.githubusercontent.com/u/31678236?s=400&v=4" width=115><br><sub>@PauloVLB</sub>](https://github.com/PauloVLB) | [<img src="https://avatars3.githubusercontent.com/u/31693006?s=460&v=4" width=115><br><sub>@isaacmsl</sub>](https://github.com/isaacmsl)
| :---: | :---: |