#!/usr/bin/env python
# coding: utf-8

# In[1]:


#Exercício 0.1
#Imprima as seguintes variáveis:

a = 10
b = 5
texto = "Olá"

a, b, texto


# In[29]:


#Exercício 0.2
#Crie uma função soma que receba dois números de parâmetro e utilize return para mostrar seu resultado

def soma(a, b):
    return a + b


# In[30]:


#testes
soma(1, 4)
soma(2, 3)


# In[31]:


#Exercício 0.3
#Implemente uma função chamada calculos que recebe como parâmetro um número qualquer e retorne:
#I - quadrado do número, II - sua metade e III - sua raíz quadrada.

import math
def calculos(n):
    numero = n ** 2, n / 2, math.sqrt(n)
    return numero


# In[32]:


calculos(4)


# In[33]:


#Exercício 1: Altura da Bola no instante t
#Imagine que uma bola é jogada para o alto e devemos calcular a altura em metros h desta bola num tempo t.
#Considere que a seguinte equação h = vt - (gt²/2), onde v é a velocidade inicial e g a gravidade.

def altura_bola(tempo, gravidade, velocidadeInicial):
    altura = (velocidadeInicial * tempo) - (gravidade * (tempo ** 2)/2)
    
    return altura


# In[34]:


#testes
bolaA1 = altura_bola(1, 9.81, 50)
print(f"Altura 1: {bolaA1}")

bolaA2 = altura_bola(5, 9.81, 50)
print(f"Altura 2: {bolaA2}")

bolaA3 = altura_bola(10, 9.81, 50)
print(f"Altura 3: {bolaA3}")


# In[35]:


#Exercício 2: Velocidade da Bola no instante t
#Podemos complementar o exercício anterior com mais uma informação sobre o lançamento:
#a velocidade V da bola no instante t, seguindo a equação V(t) = v-gt.

def velocidade_bola(tempo, gravidade, velocidadeInicial):
    velocidade = velocidadeInicial - (gravidade * tempo)
    
    return velocidade


# In[36]:


bolaV1 = velocidade_bola(1, 9.81, 50)
print(f"Velocidade 1: {bolaV1}")

bolaV2 = velocidade_bola(5, 9.81, 50)
print(f"Velocidade 2: {bolaV2}")

bolaV3 = velocidade_bola(10, 9.81, 50)
print(f"Velocidade 3: {bolaV3}")


# In[ ]:


#Unidade 2


# In[44]:


#Exercício 0.1
#Continue a implementação da função entendendo_para_cada, recebendo um vetor vetor_elementos e uma variável elemento_busca,
#utilizando o for in para contabilizar as vezes que o elemento_busca apareceu no vetor_elementos

from typing import List
def entendendo_para_cada(vetor_elementos:List, elemento_busca) -> int: 
    quantidade_elementos = 0
    
    for elemento in vetor_elementos:
        if elemento == elemento_busca:
            quantidade_elementos = quantidade_elementos + 1
    
    return quantidade_elementos


# In[46]:


#testes
vetor = [1,2,3,4,1,5,6,1]
elementoBusca = 1
qtd = entendendo_para_cada(vetor, elementoBusca)
print(f"quantidade: {qtd}")

vetor2 = [10, 9, 8, 7, 6, 5, 4, 3, 2]
elementoBusca2 = 7
qtd2 = entendendo_para_cada(vetor2, elementoBusca2)
print(f"quantidade: {qtd2}")

vetor3 = [13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13]
elementoBusca3 = 13
qtd3 = entendendo_para_cada(vetor3, elementoBusca3)
print(f"quantidade: {qtd3}")


# In[19]:


#Exercício 0.2
#A função obtem_mes recebe de parâmetro um número do mês (1 ao 12) e deve retornar o nome do mês escolhido.
#Substitua os valores None pelos corretos na função obtem_mes.

def obtem_mes(num_mes):
    if(num_mes < 1 and num_mes > 12):
        return (f"{num_Mes} é inválido")
    
    meses = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro"
    ]
    
    return meses[num_mes - 1]


# In[18]:


#testes
mes = obtem_mes(1)
print(f"Mês: {mes}")


# In[6]:


#Exercício 1: Velocidade e altura da bola em vários instantes t
#Implemente a função velocidade_altura_bola que recebe como parâmetro a gravidade g, a velocidade inicial v e um valor inteiro n
#e com isso, imprime a altura h(t) e a velocidade v(t) da bola variando t de 0 até n.

from random import random
def velocidade_altura_bola(velocidade_inicial, gravidade, n):
    
def altura_bola(tempo, gravidade, velocidadeInicial):
    altura = (velocidadeInicial * tempo) - (gravidade * (tempo ** 2)/2)
    
    return altura

def velocidade_bola(tempo, gravidade, velocidadeInicial):
    velocidade = velocidadeInicial - (gravidade * tempo)
    
    return velocidade


    i = 1
    for i in range(n):
        h = altura_bola(i, velocidade_inicial, gravidade)
        v = velocidade_bola(i, velocidade_inicial,gravidade)
        resultado = list[h, v]
    return resultado


# In[7]:


#testes
n = 20
bola = velocidade_altura_bola(9.81, 50, n)


# In[12]:


#Exercício 2: Somatório

def somatorio(numero):
    S = 0
    i = 2
    while i<=numero:
        S = S + (1/i)
        i = i + 2
    return S


# In[11]:


som_1 = somatorio(10)
print(f"Soma: {som_1}")

som_2 = somatorio(1)
print(f"Soma: {som_2}")


# In[3]:


#Exercício 3: Posição de um elemento no vetor
#Implemente a função obtem_posicao_elemento que recebe como parâmetro um vetor e um elemento, a função retorna a posição da
#primeira ocorrência do mesmo. Caso não exista, retorne null. A função deve funcionar para qualquer tamanho de vetor.

def obtem_posicao_elemento(vetor, elemento):
  i = 0
  tamanho = len(vetor)
  while i < tamanho:
    if vetor[i] == elemento:
      posicao = i
  
      return posicao
    i=i+1


# In[2]:


cores = ["azul", "roxo", "verde", "rosa", "azul"]

posicao1 = obtem_posicao_elemento(cores, "rosa")
print(f"Posição: {posicao1}")


# In[4]:


#Exercício 4: Operações com vetores

def operacao_vetor(vetor_numeros):
  min = vetor_numeros[0]
  max = vetor_numeros[0]
  i = 0
  while i < len(vetor_numeros):
    if vetor_numeros[i] < min:
      min = vetor_numeros[i]

    elif vetor_numeros[i]> max:
      max = vetor_numeros[i]
      
    i = i + 1
  return (min + max)/2


# In[3]:


vetor = [4, 6, 7, 12, 9]
resultado = operacao_vetor(vetor)
print(f"Média: {resultado}")


# In[12]:


def fibonacci(tamanho_sequencia):
    array_sequencia = []
    if tamanho_sequencia > 0:
      array_sequencia.append(0)
  
    elif tamanho_sequencia > 1:
      array_sequencia.append(1)
  
    i=0
    while i<tamanho_sequencia:
        array_sequencia.append(array_sequencia[i-2] + array_sequencia[i-1])
            
        i = i + 1
    return array_sequencia


# In[13]:


seq_1 = fibonacci(10)
print(f"fibonacci: {seq_1}")


# In[ ]:




