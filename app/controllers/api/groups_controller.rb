class Api::GroupsController < ApplicationController
  skip_before_filter :require_login
  respond_to :html, :json

  def index
    @groups = Group.joins(:students).where('students.cohort_id = ?', params[:cohort]).uniq
    respond_with(@groups, include: :students)
  end


  def show
     @groups = Group.joins(:students).select('groups.id as sgid, group_type_id, code, students.name as student_name').where(code: params[:id])
    respond_with(@groups)
  end

  def create
    cohort = Cohort.find(params[:cohort])
    students_objects = cohort.students

    students = []
    students_objects.each {|student| students << student}

    student_count = cohort.students.size

    number_of_groups = 0
    people_per_group = 0

    if params[:group_types] == "1" || params[:group_types] == "4"
      number_of_groups = GroupType.table_or_project_group_type_size(student_count)
      people_per_group = 4
    else
      number_of_groups = GroupType.meetup_or_pair_group_type_size(student_count)
      people_per_group = 2
    end

    code_suffix = '-' + params[:group_types]
    group_code = params[:group_code] + code_suffix
    Group.generate_groups(params[:group_types], group_code, students, number_of_groups, people_per_group)
    @groups = Group.joins(:students).where('students.cohort_id = ?', params[:cohort]).uniq
    respond_to do |f|
      f.json {render json: {message: "Success!"}}
    end
  end

end
