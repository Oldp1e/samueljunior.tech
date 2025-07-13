import React from 'react'
import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer'

// Estilos para o PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 25,
    textAlign: 'center',
    borderBottom: '2px solid #667eea',
    paddingBottom: 20,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    color: '#764ba2',
    marginBottom: 15,
    fontWeight: 'bold',
  },
  contactInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    fontSize: 9,
    color: '#4b5563',
    marginTop: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 10,
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: 5,
  },
  summary: {
    fontSize: 10,
    color: '#374151',
    lineHeight: 1.5,
    textAlign: 'justify',
  },
  experienceItem: {
    marginBottom: 20,
    paddingLeft: 12,
    borderLeft: '3px solid #764ba2',
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 3,
  },
  company: {
    fontSize: 11,
    color: '#764ba2',
    fontWeight: 'bold',
  },
  period: {
    fontSize: 9,
    color: '#6b7280',
  },
  description: {
    fontSize: 9,
    color: '#4b5563',
    marginBottom: 8,
    lineHeight: 1.4,
  },
  achievementsList: {
    marginLeft: 10,
  },
  achievement: {
    fontSize: 9,
    color: '#374151',
    marginBottom: 2,
    paddingLeft: 8,
  },
  projectsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  projectItem: {
    width: '48%',
    marginBottom: 10,
    padding: 8,
    backgroundColor: '#f9fafb',
    borderRadius: 4,
    border: '1px solid #e5e7eb',
  },
  projectName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 3,
  },
  projectDescription: {
    fontSize: 9,
    color: '#4b5563',
    marginBottom: 5,
    lineHeight: 1.3,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  techItem: {
    fontSize: 8,
    backgroundColor: '#f3f4f6',
    color: '#764ba2',
    padding: '2 6',
    marginRight: 4,
    marginBottom: 2,
    borderRadius: 2,
    border: '1px solid #764ba2',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  skillCategory: {
    width: '48%',
    marginBottom: 10,
  },
  skillCategoryTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#764ba2',
    marginBottom: 5,
  },
  skillsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillItem: {
    fontSize: 8,
    backgroundColor: '#f9fafb',
    color: '#374151',
    padding: '3 8',
    marginRight: 4,
    marginBottom: 3,
    borderRadius: 10,
    border: '1px solid #764ba2',
  },
  educationItem: {
    marginBottom: 15,
    paddingLeft: 12,
    borderLeft: '3px solid #764ba2',
  },
  degree: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 2,
  },
  institution: {
    fontSize: 10,
    color: '#764ba2',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  educationPeriod: {
    fontSize: 9,
    color: '#6b7280',
    marginBottom: 3,
  },
  educationDescription: {
    fontSize: 9,
    color: '#4b5563',
    lineHeight: 1.4,
  },
})

const CVDocument = () => {
  const personalInfo = {
    name: 'Samuel Pereira Lima Júnior',
    title: 'Engenheiro de Software & Game Developer',
    email: 'samuellima06091999@gmail.com',
    phone: '+55 (19) 99158-0864',
    location: 'São Paulo, Brasil',
    github: 'github.com/Oldp1e',
  }

  const summary = `Engenheiro de Software, Game Developer e Especialista em Backend com mais de 6 anos de experiência. Apaixonado por tecnologia e inovação, trilho minha carreira desenvolvendo soluções robustas, criativas e seguras para diferentes segmentos do mercado. Founder da Tropical Pixel Studios, onde lidero todas as etapas do desenvolvimento de jogos indie. Experiência sólida em PHP, PL/SQL, JavaScript, React, Unity e integração de APIs, sempre adotando princípios de clean code e foco em performance.`

  const experience = [
    {
      title: 'Founder & Game Developer',
      company: 'Tropical Pixel Studios',
      period: '2025 - Atual',
      description: 'Lidero todas as etapas do desenvolvimento de jogos indie, incluindo programação, direção de arte, marketing e publicação, criando experiências marcantes para a comunidade gamer.',
      achievements: [
        'Lançamento do jogo "Entity Strike" na Steam',
        'Desenvolvimento completo de jogos indie do conceito à publicação',
        'Direção de arte e criação de experiências únicas',
        'Construção de marca indie sustentável'
      ]
    },
    {
      title: 'PHP Developer III',
      company: 'GTPLAN Supply Chain 4.0',
      period: '2023 - 2025',
      description: 'Desenvolvimento de backends escaláveis, integrações com APIs de pagamento (Vindi), automação de processos, controle de acesso seguro (UAC) e otimização de sistemas corporativos.',
      achievements: [
        'Desenvolvimento do Sistema de Cadastro de Fornecedores com +15.000 usuários',
        'Integração com APIs de pagamento e governamentais (Receita Federal)',
        'Implementação de sistemas UAC e controle de acesso seguro',
        'Automação de processos e otimização de sistemas corporativos'
      ]
    },
    {
      title: 'Senior PHP Developer',
      company: 'Tegra',
      period: '2024',
      description: 'Gerenciei a modernização de um sistema legado de RH para uma solução web, implementando múltiplas camadas de segurança, importação de dados (XML/XLSX) e regras de negócio complexas.',
      achievements: [
        'Modernização completa do sistema legado Gurhu para web',
        'Implementação de múltiplas camadas de segurança (JWT, MD5 Hash)',
        'Sistema de importação automática de dados XML/XLSX',
        'Desenvolvimento de regras de negócio complexas para área da saúde'
      ]
    },
    {
      title: 'Analista de TI Junior / Desenvolvedor Full Stack',
      company: 'Brand Têxtil',
      period: '2020 - 2021',
      description: 'Atuei em infraestrutura, suporte, segurança de rede (PFsense), virtualização e desenvolvimento de soluções web internas usando PHP, MySQL e JavaScript.',
      achievements: [
        'Desenvolvimento de soluções web internas com PHP e MySQL',
        'Configuração e manutenção de infraestrutura de TI',
        'Implementação de segurança de rede com PFsense',
        'Suporte técnico e virtualização de sistemas'
      ]
    }
  ]

  const projects = [
    {
      name: 'Entity Strike',
      description: 'Jogo indie bullet-hell/survivors publicado na Steam pela Tropical Pixel Studios',
      technologies: ['Unity', 'C#', '2D Graphics', 'Steam SDK']
    },
    {
      name: 'Sistema de Cadastro de Fornecedores',
      description: 'Plataforma híbrida robusta com +15.000 usuários e integração com APIs governamentais',
      technologies: ['Scriptcase', 'PHP', 'MySQL', 'API Receita Federal']
    },
    {
      name: 'Easy Bid',
      description: 'Plataforma inovadora de cotações empresariais com IA e sistema de aprovações multi-nível',
      technologies: ['React', 'Node.js', 'AI', 'JWT']
    },
    {
      name: 'Módulo Frequência Web',
      description: 'Modernização completa do sistema legado Gurhu para gestão de RH na área da saúde pública',
      technologies: ['PHP', 'Scriptcase', 'MySQL', 'JWT']
    },
    {
      name: 'Outdoors Adventures Malta API',
      description: 'API completa para sistema de aluguel de embarcações com reservas, Stripe e painel administrativo',
      technologies: ['PHP', 'SQL', 'JWT', 'Stripe API', 'Swagger']
    }
  ]

  const skills = {
    'Linguagens de Programação': ['JavaScript', 'C#', 'PHP', 'Python', 'SQL', 'PL/SQL'],
    'Frontend': ['React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive Design'],
    'Backend': ['Node.js', 'Express', 'API REST', 'JWT', 'Scriptcase'],
    'Banco de Dados': ['MySQL', 'PL/SQL', 'MongoDB'],
    'Game Development': ['Unity', 'C#', '2D/3D Graphics', 'Steam Publishing'],
    'DevOps & Tools': ['Git', 'GitHub', 'Chrome Extensions', 'Vite', 'PFsense']
  }

  const education = [
    {
      degree: 'Bacharelado, Engenharia de Software',
      institution: 'Anhanguera Educacional',
      period: 'nov de 2024 - abr de 2028',
      description: 'Curso superior focado em engenharia de software, desenvolvimento de sistemas e gestão de projetos tecnológicos'
    },
    {
      degree: 'Graduação, Tecnólogo em Desenvolvimento de Jogos Digitais',
      institution: 'Fatec Americana "Ministro Ralph Biasi"',
      period: '2021 - 2023',
      description: 'Ganhador do Prêmio em Grupo Huizinga no desenvolvimento de um jogo analógico. Competências: TypeScript'
    },
    {
      degree: 'Bacharelado em Ciências da Computação, Tecnologia da Informação',
      institution: 'Faculdade de Americana',
      period: 'fev de 2018 - fev de 2022',
      description: 'Qualificado para tratar tarefas computacionais em qualquer ramo do conhecimento onde a informática é utilizada. Curso trancado em 2020 devido à mudança de foco profissional.'
    },
    {
      degree: 'Técnico, Tecnologia em Informática/Software',
      institution: 'ETEC - Escola Técnica Estadual de São Paulo',
      period: '2015 - 2017',
      description: 'Formação técnica em desenvolvimento de software e tecnologias da informação'
    }
  ]

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{personalInfo.name}</Text>
          <Text style={styles.title}>{personalInfo.title}</Text>
          <View style={styles.contactInfo}>
            <Text>{personalInfo.email}</Text>
            <Text>{personalInfo.phone}</Text>
            <Text>{personalInfo.location}</Text>
            <Text>{personalInfo.github}</Text>
          </View>
        </View>

        {/* Resumo */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Resumo Profissional</Text>
          <Text style={styles.summary}>{summary}</Text>
        </View>

        {/* Experiência */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiência Profissional</Text>
          {experience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <View style={styles.experienceHeader}>
                <View>
                  <Text style={styles.jobTitle}>{exp.title}</Text>
                  <Text style={styles.company}>{exp.company}</Text>
                </View>
                <Text style={styles.period}>{exp.period}</Text>
              </View>
              <Text style={styles.description}>{exp.description}</Text>
              <View style={styles.achievementsList}>
                {exp.achievements.map((achievement, achIndex) => (
                  <Text key={achIndex} style={styles.achievement}>
                    • {achievement}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Projetos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projetos Destacados</Text>
          <View style={styles.projectsGrid}>
            {projects.map((project, index) => (
              <View key={index} style={styles.projectItem}>
                <Text style={styles.projectName}>{project.name}</Text>
                <Text style={styles.projectDescription}>{project.description}</Text>
                <View style={styles.techStack}>
                  {project.technologies.map((tech, techIndex) => (
                    <Text key={techIndex} style={styles.techItem}>{tech}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Habilidades */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades Técnicas</Text>
          <View style={styles.skillsGrid}>
            {Object.entries(skills).map(([category, skillList], index) => (
              <View key={index} style={styles.skillCategory}>
                <Text style={styles.skillCategoryTitle}>{category}</Text>
                <View style={styles.skillsList}>
                  {skillList.map((skill, skillIndex) => (
                    <Text key={skillIndex} style={styles.skillItem}>{skill}</Text>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Educação */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Educação</Text>
          {education.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <Text style={styles.degree}>{edu.degree}</Text>
              <Text style={styles.institution}>{edu.institution}</Text>
              <Text style={styles.educationPeriod}>{edu.period}</Text>
              <Text style={styles.educationDescription}>{edu.description}</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  )
}

export default CVDocument
