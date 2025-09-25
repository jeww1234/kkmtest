const searchBooks = async () => {
  const kwd = document.getElementById("keyword").value.trim();
  if (!kwd) return alert("검색어를 입력하세요!");

  try {
    // 수정: /api/handler 경로와 쿼리 파라미터 이름 맞춤
    const response = await fetch(`/api/handler?keyword=${encodeURIComponent(kwd)}`);

    if (!response.ok) {
      throw new Error(`서버 요청 실패: ${response.status}`);
    }

    const sample = await response.json();
    abcd = sample.result || [];
    render();
  } catch (err) {
    console.error(err);
    document.getElementById("exm").innerHTML = "<p>검색 중 오류가 발생했습니다.</p>";
  }
};
