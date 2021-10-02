export const toEntityDto = (entityDto: any, repository: any) => {
    Object.assign(entityDto, repository)
    return entityDto
}