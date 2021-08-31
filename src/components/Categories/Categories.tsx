import useAsync from 'hooks/useAsync';
import { BiChevronRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import CategoryService from 'services/CategoryService';
import { ICategory } from 'types';

const Categories = () => {
  const { data: categories } = useAsync(CategoryService.getCategories);
  return (
    <div>
      {categories?.map((category: ICategory) => (
        <Link
          to={`/${category.slug}`}
          key={category._id}
          className="dropdown-item"
        >
          <span> {category.name} </span>
          <span>
            <BiChevronRight />
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
