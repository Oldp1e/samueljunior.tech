// Utilitário para geração de PDF com fallback
export const generatePDF = async (personalInfo, summary, skills, experience, education, projects) => {
  try {
    // Tenta carregar dinamicamente as dependências do PDF
    const [{ pdf }, { saveAs }, CVDocument] = await Promise.all([
      import('@react-pdf/renderer'),
      import('file-saver'),
      import('../components/CVDocument')
    ])

    // Cria o documento PDF
    const blob = await pdf(
      React.createElement(CVDocument.default, {
        personalInfo,
        summary,
        skills,
        experience,
        education,
        projects
      })
    ).toBlob()

    // Faz o download
    saveAs(blob, 'Samuel_Pereira_Lima_Junior_CV.pdf')
    return true
  } catch (error) {
    console.error('Erro ao carregar dependências do PDF:', error)
    return false
  }
}
