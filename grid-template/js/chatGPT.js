import { Configuration, OpenAIApi } from 'openai'

const apiKey = "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"
const configuration = new Configuration({ apiKey })

const openai = new OpenAIApi(configuration)

const completion = await openai.createChatCompletion({
    model: 'gpt-4-0134',
    messages:[{ role: 'user', content: '¿Cómo iterar una array en JavaScript?' }],

})

console.log(completion.data.choices[0].message)