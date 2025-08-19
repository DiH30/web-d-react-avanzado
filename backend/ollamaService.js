import axios from 'axios'

export const generateFromOllama = async (prompt) => {
  try {
    const res = await axios.post('http://localhost:11434/api/generate', {
      model: 'deepseek-r1:1.5b',
      prompt,
      stream: false
    });

    return res.data.response;
  } catch (error) {
    console.error('Error al generar respuesta de Ollama:', error.response?.data || error.message);
    throw error; // Lanzar error para ser manejado en el componente
  }
};