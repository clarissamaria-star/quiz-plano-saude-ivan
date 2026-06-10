# Lógica de Pontuação e CRM

---

## SISTEMA DE PONTUAÇÃO

Cada resposta tem um peso. O score total determina a classificação do lead.

### Classificações

| Score | Classificação | Prioridade |
|-------|--------------|------------|
| 0 – 34 | ❄️ FRIO | Baixa |
| 35 – 59 | 🔥 MORNO | Média |
| 60 – 89 | 🚨 QUENTE | Alta |
| 90+ | ⭐ PREMIUM | Urgente |

---

## MAPA DE PONTUAÇÃO POR PERGUNTA

### P1 — Situação do plano
| Resposta | Pontos |
|----------|--------|
| Sim, tenho plano | +10 |
| Não tenho, pesquisando | +8 |
| Tive, mas cancelei | +7 |
| Nunca tive | +4 |

### P2 — Satisfação com o plano atual
| Resposta | Pontos |
|----------|--------|
| Péssimo | +12 |
| Ruim | +10 |
| Regular | +7 |
| Bom | +2 |

### P3 — Reajuste
| Resposta | Pontos |
|----------|--------|
| Sim, ficou muito caro | +14 |
| Sim, achei razoável | +5 |
| Não teve reajuste | +2 |
| Não sabe | +0 |

### P4 — Tipo de plano desejado
| Resposta | Pontos |
|----------|--------|
| Individual | +6 |
| Familiar | +10 |
| Empresarial | +18 |
| Individual + Empresa | +20 |

### P5 — Perfil profissional
| Resposta | Pontos |
|----------|--------|
| Tem CNPJ | +16 |
| Autônomo/liberal | +10 |
| CLT | +4 |
| Aposentado | +6 |

### P6 — Quantidade de pessoas
| Resposta | Pontos |
|----------|--------|
| 1 pessoa | +4 |
| 2–3 pessoas | +8 |
| 4–6 pessoas | +12 |
| Mais de 6 | +18 |

### P7 — Faixa etária
| Resposta | Pontos |
|----------|--------|
| Até 35 | +4 |
| 35–49 | +8 |
| 50–59 | +10 |
| 60+ | +8 |

### P8 — Região
| Resposta | Pontos |
|----------|--------|
| São Paulo | +10 |
| Rio de Janeiro | +10 |
| Outras capitais | +9 |
| Interior | +7 |

### P9 — Interesse em dental
| Resposta | Pontos |
|----------|--------|
| Saúde + dental | +12 |
| Só dental | +8 |
| Só saúde | +6 |
| Indeciso | +3 |

### P10 — Orçamento mensal
| Resposta | Pontos |
|----------|--------|
| Até R$ 200/pessoa | +2 |
| R$ 200–500/pessoa | +8 |
| R$ 500–1000/pessoa | +14 |
| Acima de R$ 1.000/pessoa | +20 |

### P11 — Principal dor
| Resposta | Pontos |
|----------|--------|
| Preço alto | +12 |
| Rede ruim | +10 |
| Muita burocracia | +9 |
| Cobertura insuficiente | +11 |

### P12 — Urgência
| Resposta | Pontos |
|----------|--------|
| Urgente, quanto antes | +20 |
| Próximos 30 dias | +14 |
| Próximos 3 meses | +8 |
| Só pesquisando | +2 |

---

## PAYLOAD ENVIADO AO CRM (JSON)

```json
{
  "nome": "string",
  "whatsapp": "string",
  "email": "string",
  "score": "number",
  "classificacao": "frio | morno | quente | premium",
  "interesse_principal": "individual | familiar | empresarial | individual_empresa",
  "orcamento": "ate_200 | 200_500 | 500_1000 | acima_1000",
  "urgencia": "urgente | 30_dias | 3_meses | pesquisando",
  "principal_dor": "preco_alto | rede_ruim | burocracia | cobertura_ruim",
  "regiao": "sp | rj | capitais | interior",
  "respostas_completas": {
    "situacao_plano": "string",
    "satisfacao": "string",
    "reajuste": "string",
    "tipo_plano": "string",
    "perfil_profissional": "string",
    "qtd_pessoas": "string",
    "faixa_etaria": "string",
    "regiao": "string",
    "interesse_dental": "string",
    "orcamento": "string",
    "principal_dor": "string",
    "urgencia": "string"
  },
  "timestamp": "ISO 8601"
}
```

---

## INTEGRAÇÕES RECOMENDADAS

| Ferramenta | Como usar |
|-----------|-----------|
| **Make.com (Integromat)** | Webhook → Planilha Google + notificação WhatsApp para Ivan |
| **n8n** | Auto-hospedado, mais controle |
| **Zapier** | Webhook → CRM (HubSpot, RD Station, Pipedrive) |
| **RD Station** | Lead scoring nativo + automação de e-mail |
| **HubSpot Free** | CRM gratuito com pipeline visual |

---

## FLUXO DE AUTOMAÇÃO RECOMENDADO

```
Lead preenche quiz
    ↓
Webhook dispara para Make.com/n8n
    ↓
Registro salvo na planilha Google Sheets
    ↓
IF classificacao == "premium" OR "quente"
    → Notificação imediata no WhatsApp de Ivan
    → Criar deal no CRM com alta prioridade
    ↓
IF classificacao == "morno"
    → Notificação no WhatsApp de Ivan em até 30 min
    → Criar deal no CRM com prioridade média
    ↓
IF classificacao == "frio"
    → Adicionar à lista de nutrição por e-mail
    → Criar deal no CRM com baixa prioridade
```
