import axios from "axios";

const client = axios.create({
    headers: {
        Authorization: "Bearer " + import.meta.env.VITE_OPEN_AI_API,
    },
});
export const categoryFromAI = async (url) => {
    const DEFAULT_PARAMS = {
        "model": "text-davinci-003",
        "prompt": `아래 사이트의 서비스 종류를 한 단어로 알려줘\\n${url}`,
        "temperature": 0,
        "max_tokens": 60,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
    }
    return client.post('https://api.openai.com/v1/completions', DEFAULT_PARAMS).then((res) => {
        res.data.choices[0].text = res.data.choices[0].text.replace(/\/n\/n/g, "")
        return res.data.choices[0].text.trim();
    })
}
export const descriptionFromAI = async (string) => {
    const DEFAULT_PARAMS = {
        "model": "text-davinci-003",
        "prompt": `한국어로 번역해줘\\n${string}`,
        "temperature": 0,
        "max_tokens": 60,
        "top_p": 1,
        "frequency_penalty": 0,
        "presence_penalty": 0
    }
    return client.post('https://api.openai.com/v1/completions', DEFAULT_PARAMS).then((res) => {
        res.data.choices[0].text = res.data.choices[0].text.replace(/\/n\/n/g, "")
        return res.data.choices[0].text.trim();
    })
}
