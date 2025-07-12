import { useState, useEffect } from 'react'

export const useProjectModal = (projectsRef = null) => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    
    // Adiciona um estado ao histórico quando abre o modal
    window.history.pushState({ modalOpen: true }, '', '')
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
    
    // Faz scroll suave para a seção de projetos quando fecha o modal (se existir referência)
    if (projectsRef && projectsRef.current) {
      setTimeout(() => {
        projectsRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }, 100)
    }
  }

  // Effect para gerenciar o botão de voltar
  useEffect(() => {
    const handlePopState = (event) => {
      if (isModalOpen) {
        event.preventDefault()
        closeProjectModal()
      }
    }

    if (isModalOpen) {
      window.addEventListener('popstate', handlePopState)
    }

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [isModalOpen])

  return {
    selectedProject,
    isModalOpen,
    openProjectModal,
    closeProjectModal
  }
}
