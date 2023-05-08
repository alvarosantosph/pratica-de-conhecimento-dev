# Git Completo: Do Básico ao Avançado

<div align="left">
    <img src="https://img.shields.io/badge/-GIT-orange?style=for-the-badge" alt="GIT">
</div>

Este repositório é referente ao curso da [DevMasterTeam](http://www.devmasterteam.com/) disponível na plataforma [Udemy](https://www.udemy.com/course/git-completo-do-basico-ao-avancado/?referralCode=23BF453C75F742F0926F).

- Pasta [Website](https://github.com/DevMasterTeam/Udemy-Git/tree/master/Website) contém o código fonte para a página Web estática usada de exemplo no curso.
- Outras pastas, nomeadas de acordo com cada seção, se encontram os slides em formato PDF.

### Comandos Básicos Git:

git --version : Ver a versão do git instalada

git init : Inicializar um novo repositório

git config --global user.name : Adicionar um username

git config --global user.email : Adicionar um e-mail

git config --list : Listar configurações

git status : Verificar se existem commits ou mudanças no repositório

git add : Adicionar arquivo para o git rastrear

git add . : Adicionar arquivos para o git rastrear

git rm --cached arquivo : Remover arquivo do rastreamento do git

git rm --cached -r . arquivo : Remover arquivos do rastreamento do git

git restore --staged arquivo : Remover arquivo do rastreamento do git, mas precisa de um ponto de restauração (commit)

git commit -m "Mensagem" : Criar um commit (Versões)

git diff :  é usado para mostrar as diferenças entre o diretório de trabalho 
e o último commit. Isso significa que ele mostrará as alterações que você fez 
no seu repositório desde o último commit.

git diff --cached || git diff --staged :  é usado para mostrar as diferenças 
entre o índice (também conhecido como staging area) e o último commit. 
Isso significa que ele mostrará as alterações que você adicionou ao índice 
desde o último commit, mas ainda não foram confirmadas em um novo commit.

git log : Listagem dos commits na ordem decrescente (Commit, autor, data e comentário)

git log develop : Listagem dos commits na ordem decrescente de uma branch específica "develop" (Commit, autor, data e comentário)

git log --oneline : Listagem dos commits resumidos (Hash e Comentário)

git log -1 : Ver 1 commit e assim por diante

git log --online -1 : Listagem de 1 commit resumidos (Hash e Comentário)

git log -p (patch) : git log + Modificações

git log --stat : git log + Arquivos alterados

git log --shortstat : git log + Arquivos alterados resumidos (não informa o arquivo)

git commit --amend -m "Mensagem alterada" : Alterar mensagem do último commit

git commit --amend --no-edit : Alterar último commit sem alterar a mensagem

git checkout af1c949 (hash) : Ver versões anteriores de commits (Linha do tempo) (rastreados e modificados)

git checkout : Voltar para a última versão (rastreados e modificados)

git checkout main.txt : Reverter o arquivo para a última versão (rastreados e modificados)

git checkout . : Reverter todos os arquivos para a última versão (rastreados e modificados)

git clean -f (force) : Limpar arquivos não rastreados

git reset --hard :  Usado para resetar o branch atual e a área de staging para o último estado commitado

git update-index --skip-worktree index.html : Forçar o git a parar de rastrear arquivo

git update-index --no-skip-worktree index.html : Forçar o git a voltar a rastrear arquivo

git remote -v : Verificar se repositório está vinculado a um servido remoto

git remote add origin https://github.com/XXX : Vincular um diretório a um servidor remoto

git remote set-url origin https://github.com/XXX : Alterar url do repositório

git push : Enviar para o servidor remoto

git push --set-upstream origin develop || git push -u origin develop : Criar uma branch no servidor remoto e enviar dados

git pull : Trazer do servidor remoto

git branch || git branch --list : Listagem de branchs

git checkout -b task : Criar brach

git checkout develop : Acessar branch

git switch -c develop : Criar branch e faz a troca na mesma função

git switch - : Volta para a última branch selecionada

git checkout -f develop : Mudar de branch e desfazer alterações rastreadas

git branch -d TASK-1 : Remover branch local

git branch -D TASK-1 : Remover branch local mesmo o git mostrando algum aviso

git push --delete origin TASK-1 : Remover branch remota

git branch -m TASK10 : Alterar o nome da branch estando checkado na mesma

git branch -m TASK10 TASK1 : Alterar o nome da branch não estando checkado na mesma

"Não é possível alterar o nome de uma branch do servidor pelo temrinal"

git merge develop : Faz o merge da branch develop para a branch que está atualmente checado

git branch --no-merged : Mostrar branchs que não foram mergeadas

git branch --merged: Mostrar branchs que foram mergeadas com a branch checada

git merge --abort : Desfazer o merge

git tag v1 : Criação de tag "lightweight" no último commi da branch checada

git tag -a -m "Tag criada V2" v2 : Criação de tag "annotated" no último commi da branch checada, levando uma mensagem a mais e o rastreio de quem criou

git show v2 : Exibir informações da tag

git tag || git tag -l || git tag --list : Exibe tags

git tag -n : Exibe tags com a sua descrição

git tag V0 "número do commit" : Criar tag para commits antigos

git tag -a -m "Versão 0" V0 "número do commit" : Criar tag para commits antigos

git push origin v0 : Enviando tags para o repositório remoto

git push --tags : Enviando várias tags para o repositório remoto

git tag -d v1 : Remover tag

git push --delete origin v1 : Remover tag no servidor remoto

git stash : Área para salvar mudanças salvas rastreadas 

git stash list : Listar mudanças rastreadas

git stash apply : Retornar mudanças do stash (Stash 0 - Primeiro Stash)

git stash apply stash@{1} : Retornar mudança para stash específico

git stash pop : Aplica e Remove o primeiro stash

git stash pop stash@{1} : Aplica e Remover stash específico

git stash drop : Remover stash sem aplicar (Stash 0 - Primeiro Stash)

git stash drop stash@{1} : Remover stash específico sem aplicar

git stash branch feature-1 : Criar branch a partir de um stash e aplica as mudanças

### Comandos Intermediários e Avançados Git:

git revert HEAD : Reverter último commit

git revert 3ace1a2 : Reverter commit específico

git revert HEAD --no-edit : Reverter a reversão do commit

git reset --hard HEAD : Desfazendo commit do último commit

git reset --hard HEAD~1 : Desfazendo 1 commit

git reset --mixed HEAD~1 : Desfazendo 1 commit mas as alterações não são desfeitas e estão na área de modificação

git reset --soft HEAD~1 : Desfazendo 1 commit mas as alterações não são desfeitas e estão na área de preparação

git commit -a -m "Mensagem" : Adiciona todos os arquivos e commit

git push --force : Forçar o git a aceitar as minhas mudanças locais e vai sobrescrever o repositório remoto

git push --force-with-lease : Forçar o git a aceitar as minhas mudanças locais e vai sobrescrever o repositório remoto se nenhuma alteração for perdida no processo

git rebase main :  Usado para alterar a base de um branch, aplicando as alterações feitas em um branch em outro branch.

git rebase --abort : Abortar rebase

git rebase --continue : Continuar o rebase após resolução de conflitos

git rebase --interactive HEAD~3 : Rebase iterativo (Squash - Comprimir commits para somente 1)

git pull --rebase: Realiza um pull e reescreve mudança baseada na branch remota

git fetch : Trazer mudanças do servidor remoto (mas não faz a mesclagem)

git fetch origin develop : Trazer mudanças do servidor remoto (mas não faz a mesclagem) de uma branch específica

git cherry-pick ba48773 : Permite que você selecione um ou mais commits específicos de uma branch e os aplique em outra branch

git bisect : Ajuda a identificar o commit que introduziu um bug em um projeto Git (Utiliza busca binária)

git bisect start : Aguarda informar o commit bom e o commit ruim para iniciar a busca binária

git bisect good bfa22a : Informa o commit bom

git bisect bad bfa22a : Informa o commit ruim

git bisect reset : Para a busca

git config --global alias.s status : Adicionar um alias para o comando status : git s
