package coding.garden.books;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "book", path = "books-resource")
interface BookResourceRepository extends PagingAndSortingRepository<Book, Long>, CrudRepository<Book, Long> {

}
