def main(args):
    bimba()
    return 0

def bimba():
    arq_in = open("candidatos.txt","r")
    arq_out = open("candidatosAjustado.csv","w")
    linha = arq_in.readline()
    linhaTratada = ""
    i = 0
    letra = linha[i]

    while (linha != ""):
        ##pega nome
        while (not letra.isdigit()):
            linhaTratada = linhaTratada + letra
            i = i+1
            letra = linha[i]
        linhaTratada = linhaTratada.strip() + ";"

        ##pega nascimento
        while (letra != " "):
            linhaTratada = linhaTratada + letra
            i = i+1
            letra = linha[i]	
        linhaTratada = linhaTratada.strip() + ";"
        
        i = i+1
        letra = linha[i]

        ##pega cpf
        while (letra != " "):
            linhaTratada = linhaTratada + letra
            i = i+1
            letra = linha[i]	
        linhaTratada = linhaTratada.strip() + ";"

        ##pega resto
        linhaTratada = linhaTratada + linha[i:].lstrip()

        arq_out.write(linhaTratada)
        linhaTratada = ""
        linha = arq_in.readline()
        i = 0
        if (linha != ""): letra = linha[i]

    arq_in.close()
    arq_out.close()
    return 

if __name__ == '__main__':
    import sys
    sys.exit(main(sys.argv))