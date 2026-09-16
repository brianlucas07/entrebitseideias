---
title: IA na programação - minha visão
date: 2026-09-15
description: Uma reflexão sobre o papel da IA no desenvolvimento, os limites da produtividade real e por que código nunca foi apenas um detalhe.
---

# IA na programação: minha visão

Tem uma discussão rolando direto sobre o papel da IA no desenvolvimento de software. É um tema difícil, que ainda está sem resposta e cheio de pontas soltas, mas resolvi colocar no papel o que venho pensando sobre isso.

## O código importa ou não importa?

No desenvolvimento de software, eu acho que no fundo o código nunca foi o mais importante. 

Só que tem uma contradição aí. No começo dos estudos, você dá uma importância gigante pro código: fica bitolado em sintaxe de linguagem, em decorar comandos e em fazer funcionar uma tela de login. 

Depois de um tempo, você percebe que engenharia de software de verdade vai muito além disso. A real função do programador é saber *o que* fazer, *por que* fazer e *para quem* fazer. Desenhar a solução e tomar decisão técnica importa bem mais do que a velocidade de digitar.

Só que aí vem a volta: no fim das contas, o que você manda pro servidor é texto. E uma única linha de código colocada lá por uma decisão mal planejada — ou sem decisão nenhuma — pode matar a escalabilidade, a segurança ou a facilidade de manter o sistema. 

Então a IA veio e deixou explícito isso: programar é saber o que fazer e depois de feito validar se foi a melhor decisão ter feito de tal maneira.

## O paradoxo da produtividade: gerar código não é fazer software

A partir do momento em que a IA escreve código rápido, é tentador entrar naquele fluxo de *"IA, faz aí"* mas aí seria irresponsabilidade.E é aqui que começam os paradoxos. 

Se eu preciso saber exatamente o que está indo pra produção e garantir qualidade, como eu ganho tanta velocidade se ainda preciso revisar esse código, entender a lógica e escrever testes pra ele?

A IA consegue cuspir 5.000 linhas de código em minutos. O problema é que, em minutos, um ser humano não é capaz de ler e internalizar 5.000 linhas de código. 

Por isso, na minha visão, a IA te dá até 10x de velocidade pra *gerar código*, mas pra *entregar um software pronto e com qualidade*, ela só vai te garantir uns 50% de produtividade a mais no máximo, se comparado a fazer na mão. É claro que software nunca está pronto mas não dá pra tratar o código como uma caixa preta que não precisa mais olhar.

## A armadilha do "vibe coding"

Se você está sentindo que está 10x mais produtivo no projeto inteiro, provavelmente está fazendo no estilo *vibe coding*: "IA faz aí e seja o que Deus quiser". 

Só que o débito técnico também acelera dez vezes. E pode ter certeza: dali pra frente a sua rotina vai ser apagar incêndio e fazer cirurgia de emergência no sistema.

## A ilusão das especificações mágicas

Aí surgem métodos pregados como milagrosos, tipo o *Spec-Driven Development* e coisas do tipo. 

A ideia desse método é que, se você fizer uma especificação bem detalhada, você pode tratar o código só como um artefato descartável daquela spec. Eu acho isso uma baboseira. 

Não me entenda mal: especificações e documentações devem estar sempre atualizadas. Elas ajudam muito times grandes e salvam a vida de quem está entrando no projeto. 

Só que todo mundo sabe — ou pelo menos deveria saber — que não importa o quanto a sua especificação seja "detalhadazinha": ela sempre vai divergir do código em algum ponto. 

O software não se comporta como a sua spec diz, nem como os seus prompts dizem. O software se comporta de acordo com o que está rodando no código-fonte. A única fonte da verdade de um sistema é o código dele em execução. Não dá pra cair nessa ilusão.

## Engenharia de verdade em vez de atalhos

Em vez de apostar em atalhos mágicos, acho que o caminho continua sendo focar em engenharia de software de verdade: Extreme Programming (XP), integração contínua (CI/CD), testes sólidos e refatoração constante.

A IA é uma ferramenta incrível e veio pra ficar. Ela ajuda bastante no dia a dia, principalmente quando você já sabe o que quer construir. Mas ela não tira a responsabilidade técnica das suas costas. No fim do dia, quem assina o que vai pro ar é você.