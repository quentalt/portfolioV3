export function filterProjects(
  projects: Array<{ name: string; description: string; tags: string[] }>,
  searchTerm: string,
  selectedTag: string
) {
  return projects.filter(project => {
    const matchesSearch = 
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = !selectedTag || project.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });
}