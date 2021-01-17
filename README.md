# Recuperacao de senha

**RF**

- O usuario deve poder recuperar sua senha informando o seu e-mail;
- O usuario deve receber um e-mail com instrucoes de recuperacao de senha;
- O usuario deve poder resetar sua senha;

**RNF**

- Utilizar Mailtrap para testar envios em ambiente de desenvolvimento;
- Utilizar Amazon SES para envios em producao;
- O envio de e-mails deve acontecer em segundo plano (background job);

**RN**

- O link enviado por email para resetar senha, deve expirar em 2h;
- O usuario precisa confirmar a nova senha ao resetar sua senha;

# Atualizacao do perfil

**RF**

- O usuario deve poder atualizar seu nome, email e senha

**RN**

- O usuario nao pode alterar seu email para um email ja utilizado;
- Para atualizar sua senha, o usuario deve informar a senha antiga;
- Para atualizar sua senha, o usuario precisa confirma a nova senha;

# Painel do prestador

**RF**

- O usuario deve poder listar seus agendamentos de um dia especifico;
- O prestador deve receber uma notificacao sempre que hovuer um novo agendamento;
- O prestador deve poder visualizar as notificacoes nao lidas;

**RNF**

- Os agendamento do prestador no dia devem ser armazenados em cache;
- As notificacoes do prestador devem ser armazenadas no MongoDB;
- As notificacoes do prestador devem ser enviados em tempo-real utilizando Socket.io

**RN**

-A notificacao deve ter um statuso de lida ou nao-lida para que o prestador possa controlar;

# Agendamento de servicos

**RF**

- O usuario deve poder listar todos prestadores de servico cadastrados;
- O usuario deve poder listar os dias de um mes com pelo menos um horario disponivel de um prestador;
- O usuario deve poder listar horarios disponiveis em um dia especifico de um prestador;
- O usuario deve poder realziar um novo agendamento com um prestador;

**RNF**

- A listagem de prestadores deve ser armazenada em cache;

**RN**

- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponivies entre 8h as 18h (primeiro as 8 e ultimo as 18);
- O usuario nao pode agendar em um horario ja ocupado;
- O usuario nao pode agendar em um horario que ja passou;
- o usuario nao pode agendar servicos consigo mesmo;
