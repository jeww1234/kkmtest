// functions/handler.js
import fetch from "node-fetch";

export async function handler(event) {
  const keyword = event.queryStringParameters.keyword; // keyword로 받아야 함
  const API_KEY = process.env.API_KEY;

  const url = `https://www.nl.go.kr/NL/search/openApi/search.do?key=${API_KEY}&srchTarget=total&kwd=${encodeURIComponent(keyword)}&pageNum=1&pageSize=10&category=도서&apiType=json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("ddd", data)
    return { statusCode: 200, body: JSON.stringify(data) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: "API 호출 실패" }) };
  }
}
